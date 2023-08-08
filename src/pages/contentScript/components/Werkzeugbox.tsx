import React, { useState } from "react";
import { Configuration } from "../constants/Config";
import "../styles/Werkzeugbox.styles.css";
import Accordion from "./Accordion";
import KeyboardTool from "./KeyboardTool";
import MouseTool from "./MouseTool";

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
        <div
            className="werkzeugbox-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className="werkzeugbox-header">
                <div className="werkzeugbox-title">Werkzeugbox</div>
                <div
                    className="werkzeugbox-close"
                    onClick={handleCloseExtension}
                >
                    X
                </div>
            </div>
            <Accordion
                accordionItems={[
                    {
                        headerTitle: "Mouse Tool",
                        content: <MouseTool />,
                    },
                    {
                        headerTitle: "Keyboard Tool",
                        content: <KeyboardTool />,
                    },
                ]}
                activeIndexes={[]}
            />
        </div>
    );
};

export default Werkzeugbox;
