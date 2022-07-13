import { takeLatest, takeEvery, all, put } from 'redux-saga/effects';
import { addNewProduct, addNewProductUnityById, removeAllProductUnitysById, removeProduct } from '../slices/cartSlice';
import { getProductsAsync } from '../slices/productsSlice';
import { handleCartChanges } from './handlers/cart';
import { handleGetProducts } from './handlers/products';

export function* watchGetProductsAsync() {
    yield takeLatest(getProductsAsync.type, handleGetProducts)
}

export function* watchAllCartChanges() {
    yield takeEvery([
        addNewProduct,
        addNewProductUnityById,
        removeAllProductUnitysById,
        removeProduct
    ],
    handleCartChanges);
}

export function* watchAll() {
    yield all([
        watchAllCartChanges(),
        watchGetProductsAsync()
    ])
}