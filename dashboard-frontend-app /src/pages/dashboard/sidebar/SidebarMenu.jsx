import React from 'react';
import { Home, Group, Inventory2, LocalShipping } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
const SidebarMenu = () => {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-title">Dashboard</div>
            <ul className="sidebar-list">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        'sidebar-list-item' + (isActive ? ' active' : '')
                    }>
                    <Home />
                    Home
                </NavLink>
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        'sidebar-list-item' + (isActive ? ' active' : '')
                    }>
                    <Group />
                    Users
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        'sidebar-list-item' + (isActive ? ' active' : '')
                    }>
                    <Inventory2 />
                    Products
                </NavLink>
                <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                        'sidebar-list-item' + (isActive ? ' active' : '')
                    }>
                    <LocalShipping />
                    Orders
                </NavLink>
            </ul>
        </div>
    );
};

export default SidebarMenu;
