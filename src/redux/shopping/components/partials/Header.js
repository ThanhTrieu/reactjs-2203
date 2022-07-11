import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
    const { pathname } = useLocation();
    const items = [
        {label: <Link to="/">Home</Link>, key: '/'},
        {label: <Link to="/cart">Cart (3)</Link>, key: '/cart'},
    ];
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={pathname}
                items={items}
            />
        </Header>
    )
}
export default React.memo(HeaderComponent);