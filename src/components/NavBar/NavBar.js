import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

import { routes } from '../../const/routes'

import {
    NavContainer,
    NavLogo,
    NavList,
    NavItems
} from './style'


const NavBar = () => {
    return (
        // <div className="nav" id="NavContainer">
        //     <div className="nav--logo" id="NavLeft">
        //         <h1><Link to="/">Run Till Death</Link></h1>
        //     </div>
        //     <div className="nav--list" id="NavRight">
        //         <ul className="nav__items">
        //             <li className="nav__item">About</li>
        //             <li className="nav__item">Coaching</li>
        //             <li className="nav__item">Members</li>
        //             <li className="nav__item">Events</li>
        //             <li className="nav__item">Elite</li>
        //             <li className="nav__item">Join</li>
        //         </ul>
        //     </div>
        // </div>
        <NavContainer>
            <NavLogo>
                <h1><Link to="/">Run Till Death</Link></h1>
            </NavLogo>
            <NavList>
                <NavItems>
                    {
                        routes.map(route => <p>{route.text}</p>)
                    }
                </NavItems>
            </NavList>
        </NavContainer>
    )
}

export default NavBar