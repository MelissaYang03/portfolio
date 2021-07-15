import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './footer.scss';

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='social-links'>
                <a href='https://www.linkedin.com/in/melissa-yang-942055b5/' target='_blank' rel='noreferrer'>
                    <FaLinkedin className='social-links-icon' />
                </a>
                <a href='https://github.com/MelissaYang03' target='_blank' rel='noreferrer'>
                    <FaGithub className='social-links-icon' />
                </a>
            </div>
            <div>&copy; 2021 All Rights Reserved</div>
        </footer>
    );
}

export default Footer;