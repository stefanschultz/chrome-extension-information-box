import styled from "styled-components";

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 0.5rem;

    & > div {
        background-color: rgba(242, 242, 242, 1);
        padding: 10px;
        border-radius: 5px;
    }
`;

export const PanelContainerAsGridGroupColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const PanelContainerAsGridGroupRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const PanelContainerAsGrid1x = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PanelContainerAsGrid2x = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-items: center;
    align-items: center;
`;

export const PanelContainerAsGrid3x = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-items: center;
    align-items: center;
`;

export const PanelItem = styled.div`
    background-color: rgba(242, 242, 242, 1);
    padding: 10px;
    border-radius: 5px;
`;
