import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { productInterface } from './productsSlice';

import ExampleImg from '../../assets/Example.png';

interface cartProductInterface {
    id: number;
    name: string;
    price: number;
    description: string;
    brand: string;
    quantity: number;
    img: string
}

interface initialCartStateInterface {
    totalQuantity: number;
    totalPrice: number;
    products: cartProductInterface[]
}

interface addNewProductAndCalculateNewTotalQuantityPayloadInterface {
    product: productInterface
}

interface addNewUnityAndCalculateNewTotalQuantityPayloadInterface {
    id: number;
}

interface removeProductAndCalculateNewTotalQuantityPayloadInterface {
    id: number;
}

const initialState: initialCartStateInterface = {
    totalQuantity: 0,
    totalPrice: 0,
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addNewProduct: ( state, action: PayloadAction<addNewProductAndCalculateNewTotalQuantityPayloadInterface> ) => {
            let productFromPayload = action.payload.product;

            function productFromStateAlreadyExistsInTheList() {
                return state.products.find( product => product.id === productFromPayload.id) !== undefined;
            }

            function getProductFromStateByIdFromPayload() {
                return state.products.find( product => product.id === productFromPayload.id) as cartProductInterface
            }


            if(productFromStateAlreadyExistsInTheList()) {
                getProductFromStateByIdFromPayload().quantity++;
            } else {
                state.products.push({...action.payload.product, img: ExampleImg, quantity: 1});
            }
        },

        addNewProductUnityById: ( state, action: PayloadAction<addNewUnityAndCalculateNewTotalQuantityPayloadInterface> ) => {
            let productIdFromPayload = action.payload.id;

            function getProductFromStateByIdFromPayload() {
                return state.products.find( product => product.id === productIdFromPayload) as cartProductInterface
            }

            getProductFromStateByIdFromPayload().quantity++;
        },

        removeProduct: ( state, action: PayloadAction<removeProductAndCalculateNewTotalQuantityPayloadInterface> ) => {
            let productIdFromPayload = action.payload.id;

            function getProductFromStateByIdFromPayload() {
                return state.products.find( product => product.id === productIdFromPayload) as cartProductInterface
            }

            function productFromStateHaveMultipleUnits() {
                return getProductFromStateByIdFromPayload().quantity > 1;
            }

            if(productFromStateHaveMultipleUnits()) {
                getProductFromStateByIdFromPayload().quantity--;
            } else {
                state.products = state.products.filter( product => product.id !== productIdFromPayload)
            }
        },

        removeAllProductUnitysById: ( state, action: PayloadAction<removeProductAndCalculateNewTotalQuantityPayloadInterface> ) => {
            let productIdFromPayload = action.payload.id;

            state.products = state.products.filter( product => product.id !== productIdFromPayload);

            state.totalQuantity = state.products.length;
        },

        defineNewTotalQuantity: ( state ) => {
            let newTotalQuantity = 0;

            state.products.forEach( product => newTotalQuantity += product.quantity);

            state.totalQuantity = newTotalQuantity;
        },

        defineNewPriceTotal: ( state ) => {
            let newTotalPrice = 0;

            state.products.forEach( product => newTotalPrice += product.price * product.quantity);

            state.totalPrice = newTotalPrice;
        }
    }
})

export const cartReducer = cartSlice.reducer;

export const { addNewProduct, addNewProductUnityById, removeAllProductUnitysById, removeProduct , defineNewTotalQuantity, defineNewPriceTotal } = cartSlice.actions;