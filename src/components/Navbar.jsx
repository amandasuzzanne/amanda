import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className='navbar-left'>
                <h3>AMANDA SUZZANNE</h3>
            </div>
            <div className='navbar-right'>
                <p className='navbar-item'>About</p>
                <p className='navbar-item'>Experience</p>
                <p className='navbar-item'>Projects</p>
                <p className='navbar-item'>Contact</p>
            </div>
        </div>
    )
}

export default Navbar