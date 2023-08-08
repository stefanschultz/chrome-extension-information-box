import React, { useEffect, useState } from "react";
import "../styles/Werkzeugbox.styles.css";

const MouseTool = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mouseButton, setMouseButton] = useState("");
    const [mouseClick, setMouseClick] = useState("");

    const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = (event: MouseEvent) => {
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

    const handleMouseClick = (event: MouseEvent) => {
        setMouseClick("Single");
    };

    const handleMouseDoubleClick = (event: MouseEvent) => {
        setMouseClick("Double");
    };

    useEffect(() => {
        document.body.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("click", handleMouseClick);
        document.body.addEventListener("dblclick", handleMouseDoubleClick);
        document.body.addEventListener("mousedown", handleMouseEnter);

        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("click", handleMouseClick);
            document.body.removeEventListener(
                "dblclick",
                handleMouseDoubleClick,
            );
            document.body.removeEventListener("mousedown", handleMouseEnter);
        };
    }, []);

    return (
        <div className="panel-container-as-grid-group-column">
            <div className="panel-container-as-grid-2x">
                <div>X: {mousePosition.x}</div>
                <div>Y: {mousePosition.y}</div>
            </div>
            <div className="panel-container-as-grid-2x">
                <div>Button: {mouseButton}</div>
                <div>Click: {mouseClick}</div>
            </div>
        </div>
    );
};

export default MouseTool;
