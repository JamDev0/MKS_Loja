import styled, { css } from "styled-components";

interface SidebarContainerProps {
    isOpen: boolean;
}

export const SidebarContainer = styled.section<SidebarContainerProps>`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;

    width: fit-content;
    max-width: 90vw;

    box-shadow: 0px 0px 10px 0px rgba(0,0,0, 0.6);
    
    transition: transform 300ms ease-in-out;

    ${props => {
        if(props.isOpen) {
            return(
                css`
                    transform: translateX(0%);
                `
            )
        } else {
            return(
                css`
                    transform: translateX(100%);
                `
            )
        }
    }}

    & > .CloseBtn {
        position: absolute;
        
        top: 36px;
        right: 47px;
        
        color: white;

        border: 0;
        
        background-color: transparent;

    
        & > .Icon {
            width: calc(1.30rem + 15px);
            height: calc(1.30rem + 15px);
            
            transform: rotate(45deg);
            
            border: 0;
            border-radius: 99999px;

            padding: 7.5px;

            cursor: pointer;

            background-color: ${props => props.theme.colors.brand.black[500]};
        }
    }



    & > section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        flex-grow: 1;
        flex-shrink: 1;

        padding: 36px 47px;

        color: white;

        background-color: ${props => props.theme.colors.brand.blue[500]};

        & > div {
            & > h2 {
                font-size: 1.6875rem;
                font-weight: 700;
    
                max-width: 11.125rem;
                flex-shrink: 1;
    
                margin-bottom: 64px;
            }

            & > .CartItems {
                display: flex;
                flex-direction: column;
                row-gap: 22px;
            }
        }



        & > .Total {
            width: 100%;

            display: flex;
            justify-content: space-between;

            font-size: 1.75rem;
            font-weight: 700;
            color: white;
        }
    }

    @media only screen and (min-width: ${props => props.theme.screens.mobile}) {
        max-width: fit-content;
    }
`