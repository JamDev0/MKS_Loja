import styled from "styled-components";

export const CartItemDesktopContainer = styled.section`
    position: relative;

    display: flex;

    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 15px 19px;

    border: 0;
    border-radius: 8px;

    background-color: ${props => props.theme.colors.surfaces.elements};


    & > .CloseBtn {
        position: absolute;
        
        top: 0px;
        right: 0px;
        
        transform: translate(25%, -25%);

        color: white;

        border: 0;
        
        background-color: transparent;

    
        & > .Icon {
            width: calc(0.9rem + 6px);
            height: calc(0.9rem + 6px);
            
            transform: rotate(45deg);
            
            border: 0;
            border-radius: 99999px;

            padding: 3px;

            cursor: pointer;

            background-color: ${props => props.theme.colors.brand.black[500]};
        }
    }

    & > img {
        height: 57px;
        width: auto;

        margin-right: 21px;
    }

    & > h2 {
        max-width: 7rem;

        font-size: 0.8125rem;
        font-weight: 400;
        color: ${props => props.theme.colors.brand.black[500]};

        margin-right: 0.5625rem;
    }

    & > strong {
        font-weight: 700;
        font-size: 0.875rem;
        color: ${props => props.theme.colors.brand.black[500]};
    }
`