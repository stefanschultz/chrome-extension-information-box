import styled from "styled-components";

export const PrimaryButton = styled.button`
    background-color: #0078d4;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #106ebe;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.3);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;
