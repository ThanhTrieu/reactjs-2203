import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import NotFoundPage from '../pages/errors/404';

import PopularPage from '../pages/popular/index';
import UpComingPage from '../pages/coming/index';
import SearchPage from '../pages/search/index';
import DetailPage from '../pages/detail/index';
import LoginPage from '../pages/login/index';

const RouteMovies = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PopularPage/>} />
                <Route path="/up-coming" element={<UpComingPage/>} />
                <Route path="/search" element={<SearchPage/>} />
                {/* localhost:3000/spider-man-no-way-home-12333 */}
                {/* localhost:3000/:slug-:id */}
                <Route path="/:slug-:id" element={<DetailPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                {/* not found request */}
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default React.memo(RouteMovies);