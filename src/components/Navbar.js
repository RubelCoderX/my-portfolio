import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import contactImg from '../assets/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="" />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Clients</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg}alt="" className="desktopMenuImg" /> Contact Me
            </button>
        </nav>
    );
};

export default Navbar;