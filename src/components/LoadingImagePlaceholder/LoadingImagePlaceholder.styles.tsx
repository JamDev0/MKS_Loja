import styled from "styled-components";

export const LoadingImagePlaceholderContainer = styled.div`
    height: 100%;
    width: auto;

    & > .Icon {
        height: 90%;
        width: auto;

        animation: CircleRotation 1.2s cubic-bezier(0.660, -0.225, 0.210, 1.265);
        animation-iteration-count: infinite;
        animation-direction: normal;


        @keyframes CircleRotation {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }
    }
`