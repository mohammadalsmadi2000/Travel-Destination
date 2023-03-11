import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
function Header({ title }) {
    return (
        <header >
            <div className='div-header'>
                <h1>{title}</h1>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;
