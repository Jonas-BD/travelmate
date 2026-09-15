import styled from "styled-components";

export const CountryCardStyled = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1rem;
    }
`