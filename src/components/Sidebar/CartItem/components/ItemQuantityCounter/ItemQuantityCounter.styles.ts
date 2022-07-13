import styled from "styled-components";

export const ItemQuantityCounterContainer = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    min-width: fit-content;
    width: fit-content;

    height: auto;

    border: 1px solid #BFBFBF;
    border-radius: 4px;

    color: black;

    padding: 0px 5px;

    margin-right: 2.5rem;

    & button {
        display: flex;
        align-items: center;

        font-size: 1.2rem;

        color: black;

        height: min-content;

        border: 0;

        cursor: pointer;

        padding: 0px 4px;

        background-color: transparent;
    }

    & > span {
        font-size: 1.2rem;

        border: 0;
        border-left: 1px solid #BFBFBF;
        border-right: 1px solid #BFBFBF;

        padding: 0px 7px;
    }

    @media only screen and (min-width: ${props => props.theme.screens.mobile}) {
        height: fit-content;

        padding: 5px 5px;

        & button {
            font-size: 0.5rem;
        }

        & > span {
            font-size: 0.5rem;
        }

        &::before {
            content: 'Qtd.';

            position: absolute;
            top: calc(-0.3125rem - 4px);
            left: 0px;

            font-size: 0.3125rem;
            color: ${props => props.theme.colors.brand.black[500]};
        }
    }
`