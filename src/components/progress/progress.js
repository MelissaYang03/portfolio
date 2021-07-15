import React from 'react';

import './progress.scss';

const Progress = ({ level }) => {
    /*setTimeout(() => {
        const newStyle = {
            width: `${level}%`,
            transition: 'width 2s'
        }

        setProgressDoneStyle(newStyle);
    }, 1000);*/

    return (
        <div className='progress'>
            <div className='progress-done' style={{width: `${level}%`}} />
        </div>
    );
}

export default Progress;