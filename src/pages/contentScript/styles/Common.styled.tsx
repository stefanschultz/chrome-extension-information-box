import styled from "styled-components";

export const PrimaryButton = styled.button`
    background-color: #0078d4;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
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

export const SecondaryButton = styled(PrimaryButton)`
    background-color: #fff;
    color: #0078d4;
    border: 1px solid #0078d4;

    &:hover {
        background-color: #f2f2f2;
    }

    &:focus {
        box-shadow:
            0 0 0 3px rgba(0, 120, 212, 0.3),
            0 0 0 1px #fff;
    }

    &:disabled {
        background-color: #ccc;
        border-color: #ccc;
        color: #666;
        cursor: not-allowed;
    }
`;

export const PrimaryGreenButton = styled(PrimaryButton)`
    background-color: #28a745;
    color: white;

    &:hover {
        background-color: #218838;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.3);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const PrimaryRedButton = styled(PrimaryButton)`
    background-color: #dc3545;
    color: white;

    &:hover {
        background-color: #c82333;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.3);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const PrimaryYellowButton = styled(PrimaryButton)`
    background-color: #ffc107;
    color: white;

    &:hover {
        background-color: #e0a800;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.3);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const PrimaryOrangeButton = styled(PrimaryButton)`
    background-color: #fd7e14;
    color: white;

    &:hover {
        background-color: #e36209;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(253, 126, 20, 0.3);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const PrimarySkyBlueButton = styled(PrimaryButton)`
    background-color: #01cfff;
    color: white;

    &:hover {
        background-color: #00b8e6;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(1, 207, 255, 0.3);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const PrimaryGreyButton = styled(PrimaryButton)`
    background-color: #ccc;
    color: #333;

    &:hover {
        background-color: #bbb;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(204, 204, 204, 0.3);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const PrimaryBlackButton = styled(PrimaryButton)`
    background-color: #333;
    color: #fff;

    &:hover {
        background-color: #222;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(51, 51, 51, 0.3);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;
