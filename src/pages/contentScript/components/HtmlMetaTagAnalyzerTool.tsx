import React, { useEffect, useState } from "react";
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
        };
        fetchMetaTags();
    }, [url]);

    const openGraphTags = metaTags.filter((tag) =>
        tag.name.toLowerCase().startsWith("og:"),
    );

    return (
        <MetaTagAnalyzer>
            <MetaTagAnalyzerTitle>Meta Tags:</MetaTagAnalyzerTitle>
            <MetaTagList>
                {metaTags.map((tag, index) => (
                    <MetaTagListItem key={index}>
                        <strong>{tag.name}:</strong>
                        <div>{tag.content}</div>
                    </MetaTagListItem>
                ))}
            </MetaTagList>
            <MetaTagAnalyzerTitle>Open Graph Tags:</MetaTagAnalyzerTitle>
            <MetaTagList>
                {openGraphTags.map((tag, index) => (
                    <MetaTagListItem key={index}>
                        <strong>{tag.name}:</strong>
                        <div>{tag.content}</div>
                    </MetaTagListItem>
                ))}
            </MetaTagList>
        </MetaTagAnalyzer>
    );
};

export default HtmlMetaTagAnalyzerTool;
