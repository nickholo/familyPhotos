import React from 'react';

export default function AuthForm({authType}) {
    if (authType === 'signup') {
        return (
            <form id='signup' method='POST' action='/signup'>
                <input type='email' id='email' placeholder='Email'></input>
                <input type='text' id='username' placeholder='Username'></input>
                <input type='password' id='password' placeholder='Password'></input>
            </form>
        );
    }

    else if (authType === 'login') {
        return (
            <form id='login' method='POST' action='/login'>
                <input type='text' id='username' placeholder='Username'></input>
                <input type='password' id='password' placeholder='Password'></input>
            </form>
        );
    }
}