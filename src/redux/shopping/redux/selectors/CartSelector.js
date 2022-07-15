import { createSelector } from "reselect";

const cartState = state => state.cart;

export const getLoadingCart = createSelector(
    cartState,
    state => state.loadingCart
)

export const getAllDataFromCarts = createSelector(
    cartState,
    data => data.dataCarts
);

export const countDataCart = createSelector(
    getAllDataFromCarts,
    items => items.length
)