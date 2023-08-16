import React, { useEffect, useState } from "react";
import { PanelContainerAsGrid2x, PanelItem } from "../styles/Panels.styled";

const KeyboardTool = () => {
    const [lastKey, setLastKey] = useState("");
    const [lastKeyCode, setLastKeyCode] = useState("");

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            setLastKey(event.key);
            setLastKeyCode(event.code);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <PanelContainerAsGrid2x>
            <PanelItem>{`Last Key Pressed: ` + lastKey}</PanelItem>
            <PanelItem>{`Key Code: ` + lastKeyCode}</PanelItem>
        </PanelContainerAsGrid2x>
    );
};

export default KeyboardTool;
