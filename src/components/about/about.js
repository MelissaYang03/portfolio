import React from 'react';

import profile from '../../assets/profile.jpg';
import './about.scss';

const About = () => {
    return (
        <section id='about' className='common-container about-container'>
            <div className='profile'>
                <img src={profile} alt='my profile' />
            </div>
            <div className='content'>
                <div className='about-intro'>Hello, my name is Melissa.</div>
                <div className='about-role'>Software Engineer. Web Developer. Trader.</div>
                <div className='about-description'>Born in Indonesia, studied bachelor's degree in Computer Science in City University of Hong Kong.</div>
                <div className='about-desctiption'>Had experiences as a web developer for more than 2 years.</div>
            </div>
        </section>
    );
}

export default About;