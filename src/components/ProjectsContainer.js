import React from 'react'
import Card from './Card'
import LinkBoard from './LinkBoard'
import './ProjectsContainer.scss'
export default function ProjectsContainer() {
    return (
        <div className="projects-container">
            <div className="linkboard-comp"><LinkBoard/></div>
            <div>
            <div className="projects">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <button className="project-button">Create New Project</button>
            </div>
            
        </div>
    )
}
