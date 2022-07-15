import React from 'react';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
import RoutesApp from './routes/index';

import './index.css';

const { store } = configStore();

const ShoppingApp = () => {
    return (
        <Provider store={store}>
            <RoutesApp/>
        </Provider>
    )
}
export default React.memo(ShoppingApp);