import React, { useState } from "react";
import { Configuration } from "../constants/Config";
import "../styles/InformationBox.styles.css";
import Accordion from "./Accordion";
import MouseMoveAndPosition from "./MouseMoveAndPosition";

const InformationBox = () => {
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
                ".information-box-container",
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
            className="information-box-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className="information-box-header">
                <div className="information-box-title">Information Box</div>
                <div
                    className="information-box-close"
                    onClick={handleCloseExtension}
                >
                    X
                </div>
            </div>
            <Accordion
                accordionItems={[
                    {
                        headerTitle: "Mouse position",
                        content: <MouseMoveAndPosition />,
                    },
                ]}
                activeIndexes={[0]}
            />
        </div>
    );
};

/* export default InformationBox;
            onMouseUp={handleMouseUp}
        >
            <div className="information-box-header">
                <div className="information-box-title">Information Box</div>
                <div
                    className="information-box-close"
                    onClick={handleCloseExtension}
                >
                    X
                </div>
            </div>
            <Accordion
                accordionItems={[
                    {
                        headerTitle: "Mouse position",
                        content: <MouseMoveAndPosition />,
                    },
                ]}
                activeIndexes={[0]}
            />
        </div>
    );
}; */

export default InformationBox;
