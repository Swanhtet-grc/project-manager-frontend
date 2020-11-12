import React from 'react'
import './LinkBoard.scss'
import dashboard from '../images/dashboard.svg'
export default function LinkBoard() {
    return (
        <div className="link-board">
            <img className="icon" src={dashboard}/>
            <p><a href="/">Dashboard</a></p>
            <p><a href="/projects">Projects</a></p>
            <p><a href="/mytasks">My Tasks</a></p>
            <p><a href="/report">Report</a></p>
        </div>
    )
}
