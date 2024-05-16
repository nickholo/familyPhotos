import React from 'react';

export default function AuthForm({authType}) {
    if (authType == 'signup') {
        return (
            <form id='signup' method='POST' action='/signup'>
                <input type='email' id='email'></input>
                <input type='text' id='username'></input>
                <input type='password' id='password'></input>
            </form>
        )
    }

    else if (authType == 'login') {
        return (
            <form id='login' method='POST' action='/login'>
                <input type='text' id='username'></input>
                <input type='password' id='password'></input>
            </form>
        )
    }
}