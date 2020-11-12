import React from 'react'
import LinkBoard from './LinkBoard'
import "./DashContainer.scss"
import Card from './Card'
import MyTaskTable from './MyTaskTable'

export default function DashContainer() {
    return (
        <div className="app-boday">
            <div className="linkboard-comp"><LinkBoard /></div>
            <div className="project-overview">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <div className="mytasktable-comp"><MyTaskTable/></div>
            
        </div>
    )
}
