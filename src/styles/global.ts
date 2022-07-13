import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.surfaces.background};
    }

    body, textarea, button, input {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${props => props.theme.colors.surfaces.text};
    }
`