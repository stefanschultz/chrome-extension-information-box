import React, { useEffect, useState } from "react";
import {
    Attribute,
    Button,
    SearchBar,
    Spinner,
    StyledPre,
    SuccessMessage,
    Tag,
    Value,
} from "../styles/HtmlTagTreeTool.styled";

interface ITag {
    name: string;
    attributes: { [key: string]: string };
    children: ITag[];
}

const HtmlTagTree: React.FC = () => {
    const [tagTree, setTagTree] = useState<ITag[]>([]);
    const [loading, setLoading] = useState(true);
    const [copySuccess, setCopySuccess] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchHtml = async () => {
            const response = await fetch(window.location.href);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const htmlTag = doc.querySelector("html");
            if (htmlTag) {
                const tagTree = parseTagTree(htmlTag);
                setTagTree(tagTree);
                setLoading(false);
            }
        };
        fetchHtml();
    }, []);

    const parseTagTree = (element: Element): ITag[] => {
        const children = Array.from(element.children);
        return children.map((child) => ({
            name: child.tagName.toLowerCase(),
            attributes: getAttributes(child),
            children: parseTagTree(child),
        }));
    };

    const getAttributes = (element: Element): { [key: string]: string } => {
        const attributes = Array.from(element.attributes);
        return attributes.reduce(
            (acc, attribute) => {
                acc[attribute.name] = attribute.value;
                return acc;
            },
            {} as { [key: string]: string },
        );
    };

    const renderTagTree = (tag: ITag, depth: number): JSX.Element => {
        const indent = "  ".repeat(depth);
        const hasChildren = tag.children.length > 0;
        return (
            <div key={tag.name}>
                {indent}
                <Tag>&lt;{tag.name}</Tag>
                {renderAttributes(tag.attributes)}
                <Tag>&gt;</Tag>
                {hasChildren && "\n"}
                {hasChildren &&
                    tag.children.map((child) =>
                        renderTagTree(child, depth + 1),
                    )}
                {hasChildren && indent}
                <Tag>&lt;/{tag.name}&gt;</Tag>
                {depth === 0 && "\n"}
            </div>
        );
    };

    const renderAttributes = (attributes: {
        [key: string]: string;
    }): JSX.Element => {
        return (
            <>
                {Object.entries(attributes).map(([key, value]) => (
                    <React.Fragment key={key}>
                        {" "}
                        <Attribute>{key}</Attribute>=<Value>"{value}"</Value>
                    </React.Fragment>
                ))}
            </>
        );
    };

    const handleCopyToClipboard = () => {
        const textToCopy = JSON.stringify(tagTree, null, 2);
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopySuccess(true);
            setTimeout(() => {
                setCopySuccess(false);
            }, 3000);
        });
    };

    const handleSearchQueryChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSearchQuery(event.target.value);
    };

    const filterTagTree = (tagTree: ITag[], searchQuery: string): ITag[] => {
        if (!searchQuery) {
            return tagTree;
        }
        return tagTree.filter((tag) => {
            const tagString = JSON.stringify(tag);
            return tagString.toLowerCase().includes(searchQuery.toLowerCase());
        });
    };

    const filteredTagTree = filterTagTree(tagTree, searchQuery);

    return (
        <>
            <Button onClick={handleCopyToClipboard} title="Copy to Clipboard">
                Copy to Clipboard
            </Button>
            {copySuccess && (
                <SuccessMessage>Tag tree copied to clipboard!</SuccessMessage>
            )}
            <SearchBar
                type="text"
                placeholder="Search for a tag..."
                value={searchQuery}
                onChange={handleSearchQueryChange}
            />
            {loading ? (
                <Spinner />
            ) : (
                <StyledPre>
                    {filteredTagTree.map((tag) => renderTagTree(tag, 0))}
                </StyledPre>
            )}
        </>
    );
};

export default HtmlTagTree;
