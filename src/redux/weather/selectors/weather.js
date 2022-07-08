import { createSelector } from 'reselect';

// state weather of reducer
const stateWeather = state => state.weather;
// get state reducer
export const getLoadingsState = createSelector(
    stateWeather,
    state => state.loading
);
export const getAllDataWeatherState = createSelector(
    stateWeather,
    state => state.weathers
);
export const getMainDataWeather = createSelector(
    getAllDataWeatherState,
    data => {
        let results = {};
        if(data.hasOwnProperty('main')){
            results.temp = data.main.temp;
            results.humidity = data.main.humidity;
        }
        if(data.hasOwnProperty('weather') && data['weather'].length > 0){
            results.main        = data['weather'][0]['main'];
            results.description = data['weather'][0]['description'];
            results.icon        = data['weather'][0]['icon'];
        }
        return results;
    }
)