import React, { useState } from "react";
import { Configuration } from "../constants/Config";
import {
    WerkzeugboxClose,
    WerkzeugboxContainer,
    WerkzeugboxHeader,
    WerkzeugboxTitle,
} from "../styles/Werkzeugbox.styled";
import Accordion from "./Accordion";
import HtmlMetaTagAnalyzerTool from "./HtmlMetaTagAnalyzerTool";
import HtmlTagTreeTool from "./HtmlTagTreeTool";
import KeyboardTool from "./KeyboardTool";
import MouseTool from "./MouseTool";
import ScreenTool from "./ScreenTool";

const Werkzeugbox = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setDragOffset({
            x: event.clientX - event.currentTarget.offsetLeft,
            y: event.clientY - event.currentTarget.offsetTop,
        });
    };

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        if (isDragging) {
            const container = document.querySelector(
                ".werkzeugbox-container",
            ) as HTMLElement; // Cast to HTMLElement
            if (container) {
                container.style.left = `${event.clientX - dragOffset.x}px`;
                container.style.top = `${event.clientY - dragOffset.y}px`;
            }
        }
    };

    const handleMouseUp: React.MouseEventHandler<HTMLDivElement> = () => {
        setIsDragging(false);
    };

    const handleCloseExtension = () => {
        const rootElement = document.getElementById(Configuration.EXTENSION_ID);
        if (rootElement) rootElement.style.display = "none";
    };

    return (
        <WerkzeugboxContainer
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <WerkzeugboxHeader>
                <WerkzeugboxTitle>Werkzeugbox</WerkzeugboxTitle>
                <WerkzeugboxClose onClick={handleCloseExtension}>
                    X
                </WerkzeugboxClose>
            </WerkzeugboxHeader>
            <Accordion
                accordionItems={[
                    {
                        headerTitle: "AI Generative Tool",
                        content: <></>,
                    },
                    {
                        headerTitle: "Screen Tool",
                        content: <ScreenTool />,
                    },
                    {
                        headerTitle: "Mouse Tool",
                        content: <MouseTool />,
                    },
                    {
                        headerTitle: "Keyboard Tool",
                        content: <KeyboardTool />,
                    },
                    {
                        headerTitle: "HTML Meta Tag Analyzer Tool",
                        content: <HtmlMetaTagAnalyzerTool url={document.URL} />,
                    },
                    {
                        headerTitle: "HTML Tag Tree Tool",
                        content: <HtmlTagTreeTool />,
                    },
                ]}
                activeIndexes={[]}
            />
        </WerkzeugboxContainer>
    );
};

export default Werkzeugbox;
