import React from 'react';
import './common.css';
import './color.scss';
import ReactDOM from 'react-dom';
import Login from './component/login';
class Header extends React.Component {
    render() {
        return (
            <Login />
        )
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));