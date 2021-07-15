import React from 'react';

import './work-experience-item.scss';

const WorkExperienceItem = ({ workExperience, align }) => {
    const { date, jobPosition, company, jobDescriptions } = workExperience;
    return (
        <div className={`work-item ${align}`}>
            <div className='work-item-content'>
                <div className='work-item-content-header'>
                    <div className='job-position'>{jobPosition}</div>
                    <div className='date'>{date}</div>
                </div>
                <div className='company'>{company}</div>
                {
                    jobDescriptions ? 
                    <ul className='job-description'>
                        {
                            jobDescriptions.map(desc => {
                                return (
                                    <li key={desc.id}>{desc.content}</li>
                                )
                            })
                        }
                    </ul>
                    : null
                }
            </div>
        </div>
    );
}

export default WorkExperienceItem;