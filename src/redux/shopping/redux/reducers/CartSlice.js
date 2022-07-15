import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadingCart: false,
    dataCarts: [],
    errorCart: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        startAddProductCart(state, action){
            state.loadingCart = action.payload;
        },
        addProductCartSuccess(state, action){
            const infoPd = action.payload; // thong tin chi tiet san pham
            const idPd = infoPd['id'] || 0; // id cua san pham

            // kiem tra san pham them vao gio hang ton tai trong gio hang truoc do hay chua ?
            // gio hang : state.dataCarts
            const findPd = state.dataCarts.find(item => item.id === idPd);
            if(findPd === undefined){
                // ko ton tai
                // them luon san pham vao gio hang
                // bo sung truong so luong mua vao du lieu gio hang
                infoPd.qty = 1; // mac dinh mua 1 san pham
                state.dataCarts.push(infoPd);
            } else {
                // data ton tai
                // cap nhat lai so luong mua san pham
                // khong cap nhat lai du lieu trong gio hang
                findPd.qty += 1;
            }
            state.errorCart = null;
        },
        addProductCartFailure(state, action){
            state.errorCart = action.payload;
        }
    }
});

export const actionCart = cartSlice.actions;
export default cartSlice.reducer;