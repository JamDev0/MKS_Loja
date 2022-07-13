import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;

    display: flex;
    justify-content: center;
    
    padding: 8px 0px;

    background-color: ${props => props.theme.colors.surfaces.footer};

    & > h2 {
        font-size: 0.75rem;
        font-weight: 400;
        color: ${props => props.theme.colors.brand.black};
    }
`