import React, { useState } from "react";
import {
    AccordionContainer,
    AccordionContent,
    AccordionHeader,
    AccordionIcon,
    AccordionItem,
} from "../styles/Accordion.styled";

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

    const handleToggleAccordion = (index: any) => {
        if (activeIndexes.includes(index)) {
            setActiveIndexes(activeIndexes.filter((i) => i !== index));
        } else {
            setActiveIndexes([...activeIndexes, index]);
        }
    };

    return (
        <AccordionContainer>
            {props.accordionItems.map((item, index) => {
                return (
                    <AccordionItem>
                        <AccordionHeader
                            onClick={() => handleToggleAccordion(index)}
                        >
                            <span>{item.headerTitle}</span>
                            <AccordionIcon
                                isRotate={activeIndexes.includes(index)}
                            >
                                &#x25BC;
                            </AccordionIcon>
                        </AccordionHeader>
                        <AccordionContent
                            isCollapsed={!activeIndexes.includes(index)}
                        >
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </AccordionContainer>
    );
};

export default Accordion;
