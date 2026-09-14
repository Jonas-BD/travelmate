import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
        display: flex;
        align-items: center;

        & span {
            color: blue;
        }
    }

    svg {
        fill: black;
        stroke: black;
        width: 4rem;
        height: 4rem;
    }
`