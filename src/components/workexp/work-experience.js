import React from 'react';
import WorkExperienceItem from './work-experience-item';

import WORK_EXP_DATA from './work-experience.data';

import './work-experience.scss';

class WorkExperience extends React.Component {

    constructor() {
        super();

        this.state = {
            workExperiences: WORK_EXP_DATA
        };
    }
    
    render () {

        return (
            <section id='work' className='common-container work-experience-container'>
                <div className='title'>Work Experience</div>
                <div className='content'>
                    <div className='timeline'>    
                        {
                            this.state.workExperiences.map((workExperience, idx) => {
                                return (
                                    <WorkExperienceItem key={workExperience.id} workExperience={workExperience} align={idx % 2 === 0 ? 'right' : 'left'} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkExperience;