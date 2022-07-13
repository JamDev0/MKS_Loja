import { HeaderContainer } from "./Header.styles";

import Logo from '../../assets/Logo.svg'

import { CartButton } from "./CartButton";

export function Header() {
    return(
        <HeaderContainer>
            <img src={Logo} />

            <CartButton/>
        </HeaderContainer>
    )
}