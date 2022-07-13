import { ShoppingCart } from "phosphor-react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { toggleSidebar } from "../../../redux/slices/sidebarSlice";
import { CartButtonContainer } from "./CartButton.styles";

export function CartButton() {
    const dispatch = useAppDispatch();

    const { totalQuantity } = useAppSelector( state => state.cart);

    return(
        <CartButtonContainer
         onClick={() => dispatch(toggleSidebar())}
        >
            <ShoppingCart
             className="Icon"
             weight="fill"
            />

            <span>{totalQuantity}</span>
        </CartButtonContainer>
    )
}