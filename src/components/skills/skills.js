import React from 'react';
import Progress from '../progress/progress';

import SKILLS_DATA from './skills.data';

import './skills.scss';

class Skills extends React.Component {

    constructor() {
        super();

        this.state = {
            skills: SKILLS_DATA
        };
    }
    
    render () {

        return (
            <section id='skills' className='common-container skills-container'>
                <div className='title'>Skills</div>
                <div className='content'>
                {
                    this.state.skills.map(skill => {
                        return(
                            <div className='skill-item' key={skill.id}>
                                <div>{skill.name}</div>
                                <Progress level={skill.level} />
                            </div>
                        )
                    })
                }
                </div>
            </section>
        );
    }
}

export default Skills;