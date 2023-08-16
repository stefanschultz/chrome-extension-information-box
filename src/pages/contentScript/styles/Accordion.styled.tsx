import styled, { css } from "styled-components";

export const AccordionContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
`;

export const AccordionItem = styled.div`
    border-bottom: 1px solid #ddd;
`;

export const AccordionHeader = styled.div`
    background-color: rgba(245, 245, 245, 0.5);
    color: #333;
    cursor: pointer;
    font-weight: bold;
    padding: 10px;
    position: relative;
`;

export const AccordionIcon = styled.span<{ isRotate: boolean }>`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    transition: transform 0.3s ease-in-out;

    ${(props) =>
        props.isRotate &&
        css`
            transform: translateY(-50%) rotate(180deg);
        `}
`;

export const AccordionContent = styled.div<{ isCollapsed: boolean }>`
    background-color: rgba(255, 255, 255, 0.25);
    padding: 10px;

    ${(props) =>
        props.isCollapsed &&
        css`
            display: none;
        `}
`;
