import React from 'react';

export default function NavBar() {
    return (
        <nav>
            <LinkList/>
        </nav>
    );
}

function LinkList() {
    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/signup">Sign-Up</a></li>
            <li><a href="/login">Login</a></li>
        </ul>  
    );
}