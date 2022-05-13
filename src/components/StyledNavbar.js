import React from 'react';
import { NavLink } from 'react-router-dom';

//This is to demonstrate the use of NavLink in React-router compare with <Link /> 
export const Navbar = () => {
    return (
        <nav className='navbar'>
            {/* we pass a function with a parameter is an object which contain isActive key
            This isActive is passed to style when using NavLink to determine if that element is active or not so that we can adjust the style, do other modification ....
            The inline CSS
            style={({ isActive }) => {
            return { color: isActive ? 'red' : 'green' }
            }} */}
            {/* Also because NavLink will automatic apply active class to which element currently active, we can also style in css the active class*/}
            <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'link active' : 'link'}>Home
            </NavLink>
            <NavLink
                to='about'
                className={({ isActive }) => isActive ? 'link active' : 'link'}>About
            </NavLink>
            <NavLink
                to='products'
                className={({ isActive }) => isActive ? 'link active' : 'link'}>Products
            </NavLink>
        </nav >
    )
}
