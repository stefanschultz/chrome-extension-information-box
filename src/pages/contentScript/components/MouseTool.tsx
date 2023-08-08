import React, { useEffect, useState } from "react";
import "../styles/Werkzeugbox.styles.css";

const MouseTool = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mouseButton, setMouseButton] = useState("");

    const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleClick = (event: MouseEvent) => {
        switch (event.button) {
            case 0:
                setMouseButton("Left");
                break;
            case 1:
                setMouseButton("Middle");
                break;
            case 2:
                setMouseButton("Right");
                break;
            default:
                setMouseButton("");
                break;
        }
    };

    useEffect(() => {
        document.body.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("click", handleClick);

        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="panel-container-mouse-tool">
            <div>X: {mousePosition.x}</div>
            <div>Y: {mousePosition.y}</div>
            <div>Button: {mouseButton}</div>
        </div>
    );
};

export default MouseTool;
