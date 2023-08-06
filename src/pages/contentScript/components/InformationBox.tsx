import React, { useEffect, useState } from "react";

import "../styles/InformationBox.styles.css";

const InformationBox = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div className="InformationBoxContainer" onMouseMove={handleMouseMove}>
            <div>Mouse position:</div>
            <div>X: {mousePosition.x}</div>
            <div>Y: {mousePosition.y}</div>
        </div>
    );
};

export default InformationBox;
