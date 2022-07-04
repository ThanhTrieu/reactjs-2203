// reducer
// tiep nhan cac action dc store thuc thi
// thuc hien viec cap nhat lai state dua vao cai yeu cau tu action
// reducer : la 1 pure function nhan vao 2 tham so
// tham so thu  nhat chinh la state
// tham so thu 2 chinh la action
// luon luon xu ly dong bo (ko xu ly bat dong bo trong reducer)
// khi cap nhat state trong reducer cua redux core thi nho nguyen tac imutable state
// khong truc tiep thay doi state ban dau (copy - tao ra state moi de so sanh voi state ban dau)
import * as typeActions from '../actions/types';
// muc dich de phan biet cac action duoc store no goi vao reducer

// khoi tao mac dinh state va gia tri cua no
const initialState = {
    count: 0
}
export const counterReducer = (state = initialState, action) => {
    // kiem tra action dc goi vao
    switch(action.type){
        case typeActions.INCREMENT_COUNTER:
            return {
                ...state,
                count: action.payload.value + 1
            }
        case typeActions.DECREMENT_COUNTER:
            return {
                ...state,
                count: action.payload.value -1
            }
        default:
            return state;
    }
}

// selector - lay dc state tu reducer
export const selectorCounter = state => state.counter.count;