import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaAlignJustify } from 'react-icons/fa';

import './header.scss';

//https://www.youtube.com/watch?v=d0c4aPO9PNg - Smooth Scrolling Navbar Transition in ReactJS
const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    }

    const closeMobileNav = () => {
        if(isMobileNavOpen) {
            setIsMobileNavOpen(!isMobileNavOpen);
        }
    }

    return (
        <nav className='navbar'>
            <div className='nav-header'>
                <Link smooth to='#about'>
                    <div className='logo'>Melissa Yang</div>
                </Link>
                <button type='button' className='nav-btn' onClick={handleToggle}>
                    <FaAlignJustify className='nav-icon' />
                </button>
            </div>
            <ul className={`nav-links ${isMobileNavOpen ? 'show-nav' : ''}`}>
                <li className='nav-links-item'>
                    <Link smooth to='#about' onClick={closeMobileNav}>About</Link>
                </li>
                <li className='nav-links-item'>
                    <Link smooth to='#skills' onClick={closeMobileNav}>Skills</Link>
                </li>
                <li className='nav-links-item'>
                    <Link smooth to='#work' onClick={closeMobileNav}>Work Experience</Link>
                </li>
                <li className='nav-links-item'>
                    <Link smooth to='#contact' onClick={closeMobileNav}>Contact Me</Link>
                </li>
            </ul>
        </nav>
        // <div className='header'>
        //     <div className='logo-name'>Melissa Yang</div>
        //     <HeaderNavbar />
        // </div>
    );
}

export default Header;