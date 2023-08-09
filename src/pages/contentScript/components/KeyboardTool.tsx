import React, { useEffect, useState } from "react";
import "../styles/Werkzeugbox.styles.css";

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
        <div className="panel-container-as-grid-2x">
            <div>{`Last Key Pressed: ` + lastKey}</div>
            <div>{`Key Code: ` + lastKeyCode}</div>
        </div>
    );
};

export default KeyboardTool;
