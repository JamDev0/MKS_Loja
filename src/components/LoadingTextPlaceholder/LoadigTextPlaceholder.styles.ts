import styled from "styled-components";

export const LoadingTextPlaceholderContainer = styled.svg`
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    & > linearGradient {
        & > .stopWhite {
            stop-color: white;
            stop-opacity: 0.6;
        }

        & > .stopGray {
            stop-color: ${props => props.theme.colors.surfaces.text};
            stop-opacity: 0.6;
        }
    }
`