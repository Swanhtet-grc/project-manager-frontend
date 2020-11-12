import React from 'react'
import LinkBoard from './LinkBoard'
import './ReportContainer.scss'

export default function ReportContainer() {
    return (
        <div className="report-container">
            <div className="linkboard-comp"><LinkBoard/></div>
            Report
        </div>
    )
}
