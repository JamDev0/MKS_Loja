import styled from "styled-components";

export const FinishPurchaseBtnContainer = styled.button`
    width: 100%;

    background-color: ${props => props.theme.colors.brand.black[500]};

    font-size: 1.75rem;
    font-weight: 700;
    color: white;
    text-transform: uppercase;

    border: 0;

    cursor: pointer;

    padding: 40px 20px;
`