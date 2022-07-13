import { PayloadAction } from "@reduxjs/toolkit";

import { call, put } from "redux-saga/effects";

import { productInterface, setProducts } from "../../slices/productsSlice";

import { fetchProducts } from "../requests/products";

interface getProductsPayload {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
}

export function* handleGetProducts(action: PayloadAction<getProductsPayload>) {
    try {
        //@ts-ignore
        const response = yield call(fetchProducts, action.payload)

        const { data } = response;

        yield put(setProducts(data.products as productInterface[]));
    }
    catch (error) {
        yield console.error(error)
    }
}