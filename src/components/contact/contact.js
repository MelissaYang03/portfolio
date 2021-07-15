import React from 'react';

import './contact.scss';

const Contact = () => {
    return (
        <section id='contact' className='contact-container'>
            <div className='title'>Contact Me</div>
            <div className='content'>
                Should you have any questions please feel free to contact me through email at <a href='mailto:melissayang888@gmail.com'>melissayang888@gmail.com</a>
            </div>
        </section>
    );
}

export default Contact;