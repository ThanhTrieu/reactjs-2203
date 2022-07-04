import * as typeActions from './types';

// action cua user tac dong he thong
export const requestSearchData = (city) => ({
    type: typeActions.SEARCH_DATA_REQUEST,
    city
});

// action cua saga
export const startSearchData = start => ({
    type: typeActions.START_SEARCH_DATA,
    start // true
});
export const finishedSearchData = finish => ({
    type: typeActions.FINISHED_SEARCH_DATA,
    finish // false
});
export const getDataWeatherSuccess = (weather) => ({
    type: typeActions.GET_DATA_WEATHER_SUCCESS,
    weather
});
export const getDataWeatherFailure = (error) => ({
    type: typeActions.GET_DATA_WEATHER_FAIL,
    error
});