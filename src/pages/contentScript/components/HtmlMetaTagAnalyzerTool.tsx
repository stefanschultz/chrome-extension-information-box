import React, { useEffect, useState } from "react";

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
        <div className="meta-tag-analyzer">
            <h6>Meta Tags:</h6>
            <ul className="meta-tag-list">
                {metaTags.map((tag, index) => (
                    <li key={index} className="meta-tag-item">
                        <strong>{tag.name}</strong>: {tag.content}
                    </li>
                ))}
            </ul>
            <h6>Open Graph Tags:</h6>
            <ul className="meta-tag-list">
                {openGraphTags.map((tag, index) => (
                    <li key={index} className="meta-tag-item">
                        <strong>{tag.name}</strong>: {tag.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HtmlMetaTagAnalyzerTool;
