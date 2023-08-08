import React, { useEffect, useState } from "react";
import "../styles/InformationBox.styles.css";

const MouseMoveAndPosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        document.body.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="panel-container-mousemoveandposition">
            <div>X: {mousePosition.x}</div>
            <div>Y: {mousePosition.y}</div>
        </div>
    );
};

export default MouseMoveAndPosition;
