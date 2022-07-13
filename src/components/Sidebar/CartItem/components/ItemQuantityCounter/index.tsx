import { ItemQuantityCounterContainer } from "./ItemQuantityCounter.styles";

import { Minus, Plus } from "phosphor-react";

import { useAppDispatch } from "../../../../../hooks";

import { addNewProductUnityById, removeProduct } from "../../../../../redux/slices/cartSlice";

interface ItemQuantityCounterInterface {
    quantity: number;
    itemId: number;
}

export function ItemQuantityCounter({ quantity, itemId }: ItemQuantityCounterInterface) {
    const dispatch = useAppDispatch()

    return(
        <ItemQuantityCounterContainer>
            <button
             onClick={() => dispatch(removeProduct({
                id: itemId,
             }))}
             role='decreaseUnityQuantity'
            >
                <Minus weight="bold"/>
            </button>

            <span>{quantity}</span>

            <button
             onClick={() => dispatch(addNewProductUnityById({
                id: itemId,
             }))}
             role='increaseUnityQuantity'
            >
                <Plus weight="bold"/>
            </button>
        </ItemQuantityCounterContainer>
    )
}