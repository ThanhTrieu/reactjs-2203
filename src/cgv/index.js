import React from 'react';
import RoutingMovie from './routes/web';
import './index.css';

const MoviesApp = () => {
    return (
        <RoutingMovie/>
    )
}
export default React.memo(MoviesApp);