// dinh nghia ten hanh dong
// co 2 loai action
// 1 : action tu he thong hay tu user cua he thong
// 2: action cua middle redux saga (nhan vao action(1) va tra ve cac action khac va cac action do se dc dispatch vao store)

// action cua user tac dong vao he thong
export const SEARCH_DATA_REQUEST = Symbol('SEARCH_DATA_REQUEST');


// action cua saga(nhan action SEARCH_DATA_REQUEST)
export const START_SEARCH_DATA = Symbol('START_SEARCH_DATA');
export const GET_DATA_WEATHER_SUCCESS = Symbol('GET_DATA_WEATHER_SUCCESS');
export const GET_DATA_WEATHER_FAIL = Symbol('GET_DATA_WEATHER_FAIL');
export const FINISHED_SEARCH_DATA = Symbol('FINISHED_SEARCH_DATA');