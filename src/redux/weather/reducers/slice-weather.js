import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    weathers: {},
    error: null
}

const sliceWeather = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        // dinh nghia cac action cua saga
        startSearchData(state, action){
            state.loading = action.payload;
        },
        finishedSearchData(state, action){
            state.loading = action.payload;
        },
        getDataWeatherSuccess(state, action){
            state.weathers = action.payload;
            state.error = null;
        },
        getDataWeatherFailure(state, action){
            state.weathers = {};
            state.error = action.payload;
        }
    }
});
export const {
    startSearchData,
    finishedSearchData,
    getDataWeatherSuccess,
    getDataWeatherFailure
} = sliceWeather.actions;
export default sliceWeather.reducer;