import { CartItemMobileContainer } from "./CartItemMobile.styles";

import { ItemQuantityCounter } from "../../components/ItemQuantityCounter";

import { Plus } from "phosphor-react";

import { removeAllProductUnitysById } from "../../../../../redux/slices/cartSlice";

import { useAppDispatch } from "../../../../../hooks";

interface CartItemMobileInterface {
    title: string;
    quantity: number;
    price: number;
    id: number;
}

export function CartItemMobile({ price, quantity, title, id }: CartItemMobileInterface) {
    const dispatch = useAppDispatch();

    return(
        <CartItemMobileContainer>
            <button
             className="CloseBtn"
             onClick={() => {
                dispatch(removeAllProductUnitysById({
                    id,
                }))
             }} 
            >
                <Plus className="Icon" weight="bold"/>
            </button>

            <img />

            <h2>{title}</h2>

            <div>
                <ItemQuantityCounter itemId={id} quantity={quantity}/>

                <strong>R${price}</strong>
            </div>
        </CartItemMobileContainer>
    )
}