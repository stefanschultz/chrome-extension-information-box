import React, { useState } from "react";
import {
    AccordionContainer,
    AccordionContent,
    AccordionHeader,
    AccordionIcon,
    AccordionIconCollapse,
    AccordionItem,
    AccordionTitle,
} from "../styles/Accordion.styled";

interface IAccordionItem {
    icon?: React.ReactNode;
    headerTitle: string;
    content: React.ReactNode;
    premiumFeature: boolean;
}

interface IAccordionProps {
    accordionItems: IAccordionItem[];
    activeIndexes: number[];
    isFeatureEnabled: boolean;
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
                            <span>
                                {item.icon && (
                                    <AccordionIcon>{item.icon}</AccordionIcon>
                                )}
                                <AccordionTitle>
                                    {item.headerTitle}
                                </AccordionTitle>
                                {!props.isFeatureEnabled &&
                                item.premiumFeature ? (
                                    <i> [PREMIUM FEATURE]</i>
                                ) : undefined}
                            </span>
                            <AccordionIconCollapse
                                isRotate={activeIndexes.includes(index)}
                            >
                                &#x25BC;
                            </AccordionIconCollapse>
                        </AccordionHeader>
                        <AccordionContent
                            isCollapsed={!activeIndexes.includes(index)}
                        >
                            {!item.premiumFeature
                                ? item.content
                                : props.isFeatureEnabled
                                ? item.content
                                : "Please subscribe or login to use this feature."}
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </AccordionContainer>
    );
};

export default Accordion;
