import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
const MyLink = ({ text, link, customStyles }) => {
    return (
        <NavLink to={link} className={({ isActive }) => isActive && "active"} style={{ ...customStyles }}>{text}</NavLink>
    )
}

export default MyLink