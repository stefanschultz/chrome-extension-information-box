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
                    // console.log("tag", tag.getAttributeNames());
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

            console.log(metaTags);
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

/* import React, { useEffect, useState } from "react";
import {
    MetaTagAnalyzer,
    MetaTagAnalyzerTitle,
    MetaTagList,
    MetaTagListItem,
} from "../styles/HtmlMetaTagAnalyzerTool.styled";

interface MetaTag {
    name: string;
    content: string;
}

const HtmlMetaTagAnalyzerTool: React.FC<{ url: string }> = ({ url }) => {
    const [metaTags, setMetaTags] = useState<MetaTag[]>([]);

    interface AnalyzedMetaTag {
        content: string;
        otherPropertyName: string;
        otherPropertyContent: string;
    }

    useEffect(() => {
        const fetchMetaTags = async () => {
            const response = await fetch(url);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const metaTags = Array.from(doc.querySelectorAll("meta")).map(
                (tag) => ({
                    name:
                        tag.getAttribute("name") ||
                        tag.getAttribute("property") ||
                        "",
                    content: tag.getAttribute("content") || "",
                }),
            );
            setMetaTags(metaTags);

            const analyzedMetaTags: AnalyzedMetaTag[] = metaTags
                .filter((tag) => tag.name.toLowerCase().startsWith("og:"))
                .map((tag) => {
                    const otherPropertyName = tag.name.slice(3);
                    const otherPropertyContent = doc
                        .querySelector(`meta[property="${otherPropertyName}"]`)
                        ?.getAttribute("content") || "";
                    return {
                        content: tag.content,
                        otherPropertyName,
                        otherPropertyContent,
                    };
                });
            console.log(analyzedMetaTags);
        };
        fetchMetaTags();
    }, [url]);

    return (
        <MetaTagAnalyzer>
            <MetaTagAnalyzerTitle>Meta Tags:</MetaTagAnalyzerTitle>
            <MetaTagList>
                {metaTags.map((tag, index) => (
                    <MetaTagListItem key={index}>
                        <strong>meta {tag.name}:</strong>
                        <div>{tag.content}</div>
                    </MetaTagListItem>
                ))}
            </MetaTagList>
            <MetaTagAnalyzerTitle>Open Graph Tags:</MetaTagAnalyzerTitle>
        </MetaTagAnalyzer>
    );
};

export default HtmlMetaTagAnalyzerTool;
 */
