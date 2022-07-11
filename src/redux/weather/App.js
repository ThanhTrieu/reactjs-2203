import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configStore';
import SearchWeather from './components/Search';
import InfoWeather from './components/Weather';
import { Skeleton } from 'antd';

const { store, persistor } = configureStore();

const AppWeather = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Skeleton active />} persistor={persistor}>
                <SearchWeather/>
                <InfoWeather/>
            </PersistGate>
        </Provider>  
    )
}
export default React.memo(AppWeather);