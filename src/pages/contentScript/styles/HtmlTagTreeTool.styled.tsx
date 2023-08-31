import styled from "styled-components";
import { PrimaryGreenButton, PrimaryOrangeButton } from "./Common.styled";

export const StyledPre = styled.pre`
    font-family: monospace;
    font-size: 0.9rem;
    line-height: 1.5;
    white-space: pre-wrap;
    word-wrap: break-word;

    div {
        margin-left: 20px;
    }

    div:first-child {
        margin-left: 0;
    }

    span {
        color: black;
    }

    .attribute {
        color: #0086b3;
    }

    .value {
        color: #690;
    }
`;

export const Tag = styled.span`
    color: black;
`;

export const Attribute = styled.span`
    color: #0086b3;
`;

export const Value = styled.span`
    color: #690;
`;

export const CopyButton = styled(PrimaryGreenButton)`
    margin: 0.5rem 0 0.5rem 0;
`;

export const RefreshButton = styled(PrimaryOrangeButton)`
    margin: 0.5rem 0 0.5rem 0.5rem;
`;

export const SuccessMessage = styled.div`
    background-color: #4caf50;
    color: white;
    padding: 10px;
    margin-top: 10px;
`;

export const Spinner = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const SearchBar = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
`;
