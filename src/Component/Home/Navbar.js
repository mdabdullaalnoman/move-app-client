import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <div className="nav-bg">
            <nav className="container main-nav">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="menu" style={{display: 'flex', justifyContent: 'center'}}>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/details">Details</a></li>
                        <li><a href="move">Move</a></li>
                        <li><a href="move"><button>Login</button></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;