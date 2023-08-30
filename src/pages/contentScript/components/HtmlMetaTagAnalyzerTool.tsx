import React, { useEffect, useState } from "react";
import {
    MetaTagAnalyzer,
    MetaTagAnalyzerTitle,
    MetaTagList,
    MetaTagListItem,
} from "../styles/HtmlMetaTagAnalyzerTool.styled";

interface IMetaTag {
    otherAttributeName?: string;
    otherAttributeContent?: string;
    contentAttribute?: string;
}

const HtmlMetaTagAnalyzerTool: React.FC<{ url: string }> = ({ url }) => {
    const [metaTags, setMetaTags] = useState<IMetaTag[]>([]);

    useEffect(() => {
        const fetchMetaTags = async () => {
            const response = await fetch(url);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            const metaTags = Array.from(doc.querySelectorAll("meta")).map(
                (tag) => {
                    const otherAttributeName: string | undefined = tag
                        .getAttributeNames()
                        .find((name) => name !== "content");
                    const isContentAttribute: boolean = tag
                        .getAttributeNames()
                        .includes("content");
                    return {
                        otherAttributeName: otherAttributeName ?? undefined,
                        otherAttributeContent: otherAttributeName
                            ? tag.getAttribute(otherAttributeName) ?? undefined
                            : undefined,
                        contentAttribute: isContentAttribute
                            ? tag.getAttribute("content") ?? undefined
                            : undefined,
                    } as IMetaTag;
                },
            );

            setMetaTags(metaTags);
        };
        fetchMetaTags();
    }, [url]);

    return (
        <MetaTagAnalyzer>
            <MetaTagAnalyzerTitle>Meta Tags:</MetaTagAnalyzerTitle>
            <MetaTagList>
                {metaTags.map((tag, index) => (
                    <MetaTagListItem key={index}>
                        {tag.otherAttributeName &&
                            tag.otherAttributeContent && (
                                <div>
                                    <strong>{tag.otherAttributeName}:</strong>
                                    {" " + tag.otherAttributeContent}
                                </div>
                            )}
                        {tag.contentAttribute && (
                            <div>
                                <strong>content:</strong>
                                {" " + tag.contentAttribute}
                            </div>
                        )}
                    </MetaTagListItem>
                ))}
            </MetaTagList>
        </MetaTagAnalyzer>
    );
};

export default HtmlMetaTagAnalyzerTool;
