import React from 'react'
import { projectdata } from '../../../data/projectdata'
import "../../../../assets/portfolio.png"
import "./project-card.css"


export default function ProjectCard() {
    const prodata = projectdata;

    return (
        <div className='project-cards'>
            {prodata.map((opt) => {
                return (
                    <div className='project-card'>
                        <div className='project-title'>
                            {opt.title}
                        </div>
                        <div className='other-than-title'>
                            <div className='project-photo'>
                                <img src={(opt.img)} className="project-pic"/>
                            </div>
                            <div className='project-desc'>
                                <div className='project-link'>{opt.link}</div>
                                <div className='project-info'>{opt.info}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
