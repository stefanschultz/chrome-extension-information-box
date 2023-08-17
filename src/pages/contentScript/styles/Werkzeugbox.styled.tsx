import styled from "styled-components";

export const WerkzeugboxContainer = styled.div`
    position: absolute;
    min-width: 480px;
    min-height: 320px;
    width: 480px;
    height: 320px;
    padding: 0.25rem;
    top: 2rem;
    right: 2rem;
    overflow-y: scroll;
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
    border-radius: 0.5rem;
    border: 3px solid rgba(0, 0, 0, 0.15);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 99999;
    font-size: 0.8rem;
    font-family: sans-serif;
    user-select: none;
`;

export const WerkzeugboxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: rgba(242, 242, 242, 0.85);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const WerkzeugboxTitle = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

export const WerkzeugboxClose = styled.div`
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
`;
