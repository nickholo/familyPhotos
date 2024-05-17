import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className='nav-container'>
            <LinkList/>
        </nav>
    );
}

function LinkList() {
    return (
        <ul className='nav-list'>
            <li className='nav-list-item'><NavLink to='/'>Home</NavLink></li>
            <li className='nav-list-item'><NavLink to='/signup'>Sign-Up</NavLink></li>
            <li className='nav-list-item'><NavLink to='/login'>Login</NavLink></li>
        </ul>
    );
}
