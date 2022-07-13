import { ProductCardContainer } from "./ProductCard.styles";

import { ShoppingBagOpen } from "phosphor-react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { LoadingTextPlaceholder } from "../../../LoadingTextPlaceholder";
import { LoadingImagePlaceholder } from "../../../LoadingImagePlaceholder";
import { addNewProduct } from "../../../../redux/slices/cartSlice";

import ExampleImg from '../../../../assets/Example.png'

interface ProductCardProps{
    id?: number;
    name?: string;
    price?: number;
    description?: string;
    brand?: string;
    img?: string;
}

export function ProductCard({ id, name, price, brand, description, img }: ProductCardProps) {
    const { loading } = useAppSelector( state => state.products);

    const dispatch = useAppDispatch();

    function isProductsLoading() {
        return loading !== 'succeeded'
    }

    return(
        <ProductCardContainer
            role={isProductsLoading() ? `skeleton` : `component`}
        >
            <section>
                <div>
                    {
                        isProductsLoading() ?
                            <LoadingImagePlaceholder />
                        : 
                            <img />
                    }
                </div>

                <section>
                    <h2>
                        {
                            isProductsLoading() ?
                                <LoadingTextPlaceholder />
                            :
                                name
                        }
                    </h2>

                    <strong>
                        {
                            isProductsLoading() ?
                                'R$----'
                            :
                                `R$${price}`
                        }
                    </strong>
                </section>

                <p>
                    {
                        isProductsLoading() ?
                            <LoadingTextPlaceholder />
                        :
                            description
                    }  
                </p>
            </section>

            <button
             disabled={isProductsLoading()}
             onClick={ () => dispatch(addNewProduct({
                 product: {
                     id: id!,
                     brand: brand!,
                     description: description!,
                     name: name!,
                     price: price!,
                     img: ExampleImg
                 }
             }))}
            >
                <ShoppingBagOpen className="Icon" weight="bold"/>
                <span>comprar</span>
            </button>
        </ProductCardContainer>
    )
}