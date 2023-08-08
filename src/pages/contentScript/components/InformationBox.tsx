import React from "react";
import "../styles/InformationBox.styles.css";
import Accordion from "./Accordion";
import MouseMoveAndPosition from "./MouseMoveAndPosition";

const InformationBox = () => {
    return (
        <div className="information-box-container">
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

export default InformationBox;
