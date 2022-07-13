import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";

import { getProductsAsync } from "../../redux/slices/productsSlice";

import { ProductCard } from "./components/ProductCard";

import { MainContainer } from "./Main.styles";

export function Main() {
    const dispatch = useAppDispatch();

    const { loading, products } = useAppSelector( state => state.products)

    function isProductsLoading() {
        return loading !== 'succeeded';
    }
    
    useEffect(() => {
        dispatch(getProductsAsync({
            orderBy: 'ASC',
            page: 1,
            rows: 8,
            sortBy: 'name'
        }))
    }, [])


    return(
        <MainContainer>
            {
                isProductsLoading() ?
                    <>
                        <ProductCard />
                        <ProductCard />
                    </>
                :
                    products.map( product => {
                        return <ProductCard key={product.id} {...product}/>
                    })
            }
            
        </MainContainer>
    )
}