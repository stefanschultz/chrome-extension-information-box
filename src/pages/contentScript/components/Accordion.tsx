import React, { useState } from "react";
import "../styles/Accordion.styles.css";

interface IAccordionItem {
    headerTitle: string;
    content: React.ReactNode;
}

interface IAccordionProps {
    accordionItems: IAccordionItem[];
    activeIndexes: number[];
}

const Accordion: React.FC<IAccordionProps> = (props) => {
    const [activeIndexes, setActiveIndexes] = useState<number[]>(
        props.activeIndexes,
    );

    const handleToggleAccordion = (index) => {
        if (activeIndexes.includes(index)) {
            setActiveIndexes(activeIndexes.filter((i) => i !== index));
        } else {
            setActiveIndexes([...activeIndexes, index]);
        }
    };

    return (
        <div className="accordion">
            {props.accordionItems.map((item, index) => {
                return (
                    <>
                        <div
                            className={`accordion-item ${
                                activeIndexes.includes(index) ? "" : "collapsed"
                            }`}
                        >
                            <div
                                className="accordion-header"
                                onClick={() => handleToggleAccordion(index)}
                            >
                                <span>{item.headerTitle}</span>
                                <span
                                    className={`accordion-icon ${
                                        activeIndexes.includes(index)
                                            ? "rotate"
                                            : ""
                                    }`}
                                >
                                    &#x25BC;
                                </span>
                            </div>
                            <div className="accordion-content">
                                {item.content}
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default Accordion;
