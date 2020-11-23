import React from 'react';
import header from './header.jpg';
import { Link } from 'react-router-dom';
import './Header.css';

interface Props {
    active: number
}

const links = [{
    label: '简历',
    path: '/'
}, {
    label: '记录',
    path: '/blog'
}];

export default function Header({ active }: Props) {

    return (
        <div className="Header">
            <div className="header-box"><img src={header} alt="我的头像" /></div>
            <div><p className="my-id">Mindy_Tang</p></div>
            <div className="my-sort">
                {links.map((v, i) => (
                    <Link to={v.path} key={i} className={`${active === i ? "active" : ""}`}>{v.label}</Link>
                ))}
            </div>
        </div>
    );
}