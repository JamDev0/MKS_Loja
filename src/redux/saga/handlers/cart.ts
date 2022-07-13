import { put } from "redux-saga/effects";

import { defineNewPriceTotal, defineNewTotalQuantity } from "../../slices/cartSlice";

export function* handleCartChanges() {
    yield put(defineNewTotalQuantity());
    yield put(defineNewPriceTotal());
}