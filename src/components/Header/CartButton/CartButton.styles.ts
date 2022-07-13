import styled from "styled-components";

export const CartButtonContainer = styled.button`
    display: flex;
    align-items: center;
    column-gap: 0.8rem;
    
    padding: 0.5rem;

    width: fit-content;

    background-color: ${props => props.theme.colors.surfaces.elements};

    border: 0;
    border-radius: 8px;

    color: ${props => props.theme.colors.brand.black};

    cursor: pointer;

    & > .Icon {
        width: 0.7rem;
        height: 0.7rem;
    }

    & > span {
        font-size: 0.6875rem;
        font-weight: 700;

        margin-right: 0.5rem;
    }
    
    @media only screen and (min-width: ${props => props.theme.screens.mobile}) {
        column-gap: 1rem;

        padding: 0.87rem;

        & > .Icon {
            width: 1.1875rem;
            height: 1.1875rem;
        }
    
        & > span {
            font-size: 1.125rem;
            font-weight: 700;

            margin-right: 1.2rem;
        }
    }
`