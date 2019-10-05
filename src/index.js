import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
class Header extends React.Component {
    render() {
        return (
            <div className='flex space-between pl50 pr50'>
                <div>
                    <img className='w100' alt='aa' src='http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png' />
                </div>
                <div>
                    <ul className='menu'>
                        <li>Home</li>
                        <li>Menu2</li>
                        <li>Menu3</li>
                        <li>Menu4</li>
                        <li>Menu5</li>
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));