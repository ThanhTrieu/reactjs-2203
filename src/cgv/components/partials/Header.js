import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderMovies = () => {
    const items = [
        {label: 'Popularity', key: '/popularity'}, // popularity
        {label: 'Up coming', key: '/up-coming'}, // up coming
        {label: 'Search', key: '/search'} // search
    ];
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['/popularity']}
                items={items}
            />
        </Header>
    )
}
export default React.memo(HeaderMovies);