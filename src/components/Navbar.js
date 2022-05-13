import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='products'>Products</Link>
            <Link to='login'>Login</Link>
        </nav>
    )
}
