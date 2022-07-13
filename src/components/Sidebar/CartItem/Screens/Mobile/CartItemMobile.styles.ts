import styled from "styled-components";

export const CartItemMobileContainer = styled.section`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    padding: 15px 19px;

    border: 0;
    border-radius: 8px;

    background-color: ${props => props.theme.colors.surfaces.elements};


    & > .CloseBtn {
        position: absolute;
        
        top: 15px;
        right: 19px;
        
        transform: translate(25%, -25%);

        color: ${props => props.theme.colors.brand.black};

        border: 0;
        
        background-color: transparent;

    
        & > .Icon {
            width: 2.5rem;
            height: 2.5rem;
            
            transform: rotate(45deg);

            cursor: pointer;
        }
    }

    & > img {
        height: 95px;
        width: auto;
    }

    & > h2 {
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme.colors.brand.black[500]};
    }

    & > div {
        display: flex;
        justify-content: space-between;
        
        & > strong {
            font-weight: 700;
            font-size: 0.9375rem;
            color: white;

            padding: 8px 17px;

            border: 0;
            border-radius: 5px;

            background-color: ${props => props.theme.colors.brand.gray[500]};
        }
    }
`