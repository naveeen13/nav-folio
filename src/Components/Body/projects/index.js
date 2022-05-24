import React from 'react'
import ProjectCard from './project-card'
import "./projects.css"

export default function Projects(props) {
    

    return (
        <div className='projects'>
            <div className='project-init'>Projects</div>
            <ProjectCard/>
        </div>
    )
}