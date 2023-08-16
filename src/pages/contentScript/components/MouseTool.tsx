import React, { useEffect, useState } from "react";
import {
    PanelContainerAsGrid2x,
    PanelContainerAsGridGroupColumn,
    PanelItem,
} from "../styles/Panels.styled";

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
        <PanelContainerAsGridGroupColumn>
            <PanelContainerAsGrid2x>
                <PanelItem>{`X: ` + mousePosition.x}</PanelItem>
                <PanelItem>{`Y: ` + mousePosition.y}</PanelItem>
            </PanelContainerAsGrid2x>
            <PanelContainerAsGrid2x>
                <PanelItem>{`Button: ` + mouseButton}</PanelItem>
                <PanelItem>{`Click: ` + mouseClick}</PanelItem>
            </PanelContainerAsGrid2x>
        </PanelContainerAsGridGroupColumn>
    );
};

export default MouseTool;
