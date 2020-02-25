import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const MenuItem = ({ active, children, to }) => (
    <Link to={to} className="menu-item">
        {children}
    </Link>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
                용인시 코로나 알림이
            </div>
            <div className="menu">
                <MenuItem to={'/'}>용인시 현황</MenuItem>
                <MenuItem to={'/map'}>지도</MenuItem>
                <MenuItem to={'/hospital'}>선별진료소</MenuItem>
                <MenuItem to={'call'}>문의전화</MenuItem>
                <MenuItem to={'info'}>사이트정보</MenuItem>
            </div>
        </div>
    );
};

export default Header;