import styled from "styled-components";

export const MetaTagAnalyzer = styled.div`
    font-family: sans-serif;
    font-size: 0.9rem;
    line-height: 1.5;
`;

export const MetaTagAnalyzerTitle = styled.div`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const MetaTagList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const MetaTagListItem = styled.li`
    margin-bottom: 1.5rem;

    & > div {
        padding: 0 1.5rem 0 1.5rem;

        & > strong {
            font-weight: bold;
        }
    }
`;
