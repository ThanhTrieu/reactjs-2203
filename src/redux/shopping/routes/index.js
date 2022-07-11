import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import loadable from '@loadable/component';

//import NotFoundPage from '../pages/errors/404';
const NotFoundPage = loadable(() => import('../pages/errors/404'));

//import PopularPage from '../pages/popular/index';
const HomePage = loadable(() => import('../pages/home/index'));
//import UpComingPage from '../pages/coming/index';
const CartPage = loadable(() => import('../pages/cart/index'));

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/cart" element={<CartPage/>} />
                {/* not found request */}
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default React.memo(RouteApp);