import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga'

import { cartReducer } from './slices/cartSlice';

import { productsReducer } from './slices/productsSlice';

import { sidebarReducer } from './slices/sidebarSlice';

import { watchAll } from './saga/rootSagas';
import { testsReducer } from './slices/testsSlice';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        products: productsReducer,
        cart: cartReducer,
        tests: testsReducer
    },
    middleware: [
        sagaMiddleware
    ]
})

sagaMiddleware.run(watchAll)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch