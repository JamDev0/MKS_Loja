import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 18px;

    padding: 11px 20px;

    background-color: ${props => props.theme.colors.brand.blue[500]};

    & > img {
        width: 9rem;
    }

    @media only screen and (min-width: ${props => props.theme.screens.mobile}) {
        margin-bottom: 116px;
    
        width: 100%;
    
        padding: 28px 65px;

        & > img {
            width: 11.9375rem;
        }
    }
`