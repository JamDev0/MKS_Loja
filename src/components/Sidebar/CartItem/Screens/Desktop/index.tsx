import { CartItemDesktopContainer } from "./CartItemDesktop.styles";

import { ItemQuantityCounter } from "../../components/ItemQuantityCounter";

import { Plus } from "phosphor-react";

import { useAppDispatch } from "../../../../../hooks";

import { removeAllProductUnitysById } from "../../../../../redux/slices/cartSlice";

interface CartItemDesktopInterface {
    title: string;
    quantity: number;
    price: number;
    id: number;
}

export function CartItemDesktop({ price, quantity, title, id }: CartItemDesktopInterface) {
    const dispatch = useAppDispatch();

    return(
        <CartItemDesktopContainer>
            <button
             className="CloseBtn"
             onClick={() => {
                dispatch(removeAllProductUnitysById({
                    id: id,
                }))
             }} 
            >
                <Plus className="Icon" weight="bold"/>
            </button>
            
            <img/>

            <h2>{title}</h2>

            <ItemQuantityCounter itemId={id} quantity={quantity}/>

            <strong>R${price}</strong>
        </CartItemDesktopContainer>
    )
}