import styled from "styled-components";

export const ProductCardContainer = styled.section`
    --fixed-product-width: 250px;

    display: flex;
    flex-direction: column;

    width: var(--fixed-product-width);
    max-width: var(--fixed-product-width);
    min-width: var(--fixed-product-width);

    height: 350px;

    border: 0;
    border-radius: 8px;

    box-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.25);
    
    overflow: hidden;

    & > section {
        display: flex;
        flex-direction: column;

        width: 100%;
        
        flex-grow: 1;
        flex-shrink: 1;

        padding: 20px 16px;

        color: ${props => props.theme.colors.surfaces.text};

        background-color: ${props => props.theme.colors.surfaces.elements};

        & > div {
            width: 100%;

            flex-grow: 1;
            flex-shrink: 1;

            display: flex;
            justify-content: center;

            margin-bottom: 16px;

            & > img {
                flex-shrink: 1;

                width: auto;
                max-width: 100%;
            }
        }

        & > section {

            display: flex;

            margin-bottom: 9px;

            & > h2 {
                position: relative;

                min-height: 1rem;

                flex-grow: 1;
                flex-shrink: 1;

                font-size: 1rem;
                font-weight: 400;

                margin-right: 0.3rem;
            }

            & > strong {
                height: fit-content;

                font-size: 0.9375rem;
                font-weight: 700;

                color: white;

                padding: 4px 6px;

                border: 0;
                border-radius: 5px;

                background-color: ${props => props.theme.colors.brand.gray[500]};
            }
        }

        & > p {
            position: relative;

            min-height: 0.625rem;

            font-size: 0.625rem;
            font-weight: 300;
        }
    }

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 0.875rem;

        width: 100%;

        padding: 9px 0px;

        border: 0;

        color: white;

        cursor: pointer;

        background-color: ${props => props.theme.colors.brand.blue[500]};

        &:disabled {
            filter: brightness(0.7);

            cursor: wait;
        }

        & > .Icon {
            font-size: 1.3rem;

            opacity: 0.6;
        }

        & > span {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 0.875rem;
        }
    }

    @media only screen and (min-width: ${props => props.theme.screens.mobile}) {
        height: 300px;


        --fixed-product-width: 218px;

        & > section {
            padding: 18px 14px;

            & > div {

                margin-bottom: 14px;
            }

            & > section {
                margin-bottom: 8px;
            }
        }
    }
`