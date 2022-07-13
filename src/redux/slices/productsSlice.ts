import { createSlice } from '@reduxjs/toolkit';

import ExampleImg from '../../assets/Example.png';

export interface productInterface {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    img: string;
}

interface productsState {
    products: productInterface[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}
  
const initialState = {
    products: [],
    loading: 'idle',
} as productsState
  
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductsAsync: ( state, action ) => {
            state.loading = 'pending';
        },

        setProducts: ( state, action ) => {
            state.products = action.payload;
            state.products.map( product => product.img = ExampleImg)
            state.loading = 'succeeded';
        }
    },
});

export const productsReducer = productsSlice.reducer;

export const { getProductsAsync, setProducts } = productsSlice.actions;