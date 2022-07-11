import React from 'react';
import LayoutComponent from '../../components/Layout';

const HomePage = () => {
    return (
        <LayoutComponent>
            <h5>This is the Home Page</h5>
        </LayoutComponent>
    )
}
export default React.memo(HomePage);