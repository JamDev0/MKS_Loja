import { Plus } from "phosphor-react";

import { useMediaQuery } from "react-responsive";

import { useAppDispatch, useAppSelector } from "../../hooks";

import { toggleSidebar } from "../../redux/slices/sidebarSlice";

import { CartItemDesktop } from "./CartItem/Screens/Desktop";

import { CartItemMobile } from "./CartItem/Screens/Mobile";

import { FinishPurchaseBtn } from "./FinishPurchaseBtn";

import { SidebarContainer } from "./SIdebar.styles";

export function Sidebar() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 780px)'
    })

    const { isSidebarOpen } = useAppSelector( state => state.sidebar)

    const { products, totalPrice } = useAppSelector( state => state.cart)

    const dispatch = useAppDispatch();

    
    function isProductsListGreaterThanZero() {
        return  products.length > 0;
    }

    return(
        <SidebarContainer isOpen={isSidebarOpen}>
            <button
                className="CloseBtn z-10"
                onClick={() => dispatch(toggleSidebar())}
            >
                <Plus className="Icon" weight="bold"/>
            </button>

            <section>
                <div>
                    <h2>Carrinho de compras</h2>    

                    <section className="CartItems">
                        {
                            isProductsListGreaterThanZero() ? 
                                isDesktop ? 
                                    products.map( product => (
                                        <CartItemDesktop
                                         price={product.price}
                                         quantity={product.quantity}
                                         title={product.name}
                                         id={product.id}
                                         key={product.id}
                                        />
                                    ))
                                :
                                    products.map( product => (
                                        <CartItemMobile
                                         price={product.price}
                                         quantity={product.quantity}
                                         title={product.name}
                                         id={product.id}
                                         key={product.id}
                                        />
                                    ))
                            :
                                null
                        }
                    </section>
                </div>

                <section className="Total">
                    <strong>Total</strong>

                    <strong>R${totalPrice}</strong>
                </section>
            </section>

            <FinishPurchaseBtn />
        </SidebarContainer>
    )
}