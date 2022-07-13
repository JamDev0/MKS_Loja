import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 18px;

    margin-bottom: 37px;

    @media only screen and (min-width: ${props => props.theme.screens.mobile}) {
        flex-direction: row;
        justify-content: space-between;
        column-gap: 22.5px;
        row-gap: 31px;
        flex-wrap: wrap;

        margin: 0px 15.4375rem;

        margin-bottom: 172px;
    }
`