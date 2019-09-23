import React, { Component } from 'react';
import './style.scss';

export default class Login extends Component {
    render() {
        return (
            <div className='flex'>
                <p>Login Id : </p>
                <input className='ml5' type='text' />
            </div>
        )
    }
}
