import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Portfolio</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/projects'>Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/cover-letter'>Cover Letter</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/resume'>Resume</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;