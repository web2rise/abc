import React, { Component } from 'react';
import './style.scss';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            hover:false
        };
        this.toggleHover=this.toggleHover.bind(this);
    }
    toggleHover() {
        const currentState = this.state.hover;
        this.setState({ hover: !currentState });
    };
    render() {
        return (
            <div className={`${this.state.hover?'hover':null} loginForm mauto p48 absolute`}>
                <p className='f20 fwb text-center'>Mohit Electrovision Login</p>
                <div className='flex alignCenter mt24'>
                    <p className='flexFull text-center f14'>Login Id</p>
                    <p className='flexFull'><input className='table-bordered p4' type='text' /></p>
                </div>
                <div className='flex alignCenter mt15'>
                    <p className='flexFull text-center f14'>Password</p>
                    <p className='flexFull'><input className='table-bordered p4' type='text' /></p>
                </div>
                <div className='flex alignCenter mt15'>
                    <p className='flexFull text-center f14 p24 pt5 pb5 sbc1 sfcw fwb cursorP' onClick={this.toggleHover}>Login</p>
                </div>
                <p className='sfc1 text-right pt8 cursorP'>Forgot Password?</p>
            </div>
        )
    }
}
