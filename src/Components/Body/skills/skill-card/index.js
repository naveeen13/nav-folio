import React from 'react'
import { skilldata } from '../../../data/skilldata'
import "./skill-card.css"

export default function SkillCard() {
    const skillData = skilldata;

    return (
        <div className='skillcards'>
            {skillData.map((one) => {
                return(
                    <div className='skillcard'>
                        <img src={(one.icon)} className="skill-photo" />
                        <div className='skill-label'>{one.labe}</div>
                    </div>
                )
            })}
            
        </div>
    )
}
