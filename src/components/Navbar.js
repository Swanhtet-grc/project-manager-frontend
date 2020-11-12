import React from 'react'
import './Navbar.scss'
export default function Navbar() {
    return (
        <div className="navbar">
            <h3 className="app-title" ><a href="/">Project Manager</a></h3>
            <div className="nav-link">
            <a><p>Log in</p></a>
            <a><p>Sign up</p></a>
            </div>
        </div>
    )
}
