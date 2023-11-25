import React from 'react';
import './ActiveLink.css';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active" : "text-black-50 text-decoration-none"}
        >
            {children}
        </NavLink >
    );
};

export default ActiveLink;