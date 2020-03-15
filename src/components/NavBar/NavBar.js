import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"


const NavBar = () => {
    return (
        <div className="nav">
            <div className="nav--logo">
                <h1><Link to="/">Run Till Death</Link></h1>
            </div>
            <div className="nav--list">
                <ul className="nav__items">
                    <li className="nav__item">About</li>
                    <li className="nav__item">Coaching</li>
                    <li className="nav__item">Members</li>
                    <li className="nav__item">Events</li>
                    <li className="nav__item">Elite</li>
                    <li className="nav__item">Join</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar