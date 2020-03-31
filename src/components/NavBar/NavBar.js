import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"


import { routes } from '../../const/routes'

import {
    NavContainer,
    NavLogo,
    NavList,
    NavItems,
    NavBarLink,
    HamburgerContainer,
    HamburgerBar,
    Overlay
} from './style'


const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    window.onresize = () => (window.innerWidth > 900 && isOpen) && setIsOpen(false)
    return (
        <NavContainer>
            <NavLogo>
                <h1><Link to="/">Run Till Death</Link></h1>
            </NavLogo>
            <NavList>
                <NavItems>
                    {
                        routes.map(route => <NavBarLink exact to={route.path}>{route.text}</NavBarLink>)
                    }
                </NavItems>
            </NavList>
            <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
            <Overlay className={ isOpen ? "show" : "hide"}>
                    {
                        routes.map(route => 
                            <NavBarLink className="overlay-links" exact to={route.path} onClick={() => setIsOpen(false)}>{route.text}</NavBarLink>
                        )
                    }
            </Overlay>
        </NavContainer>
    )
}

const Hamburger = ({ setIsOpen, isOpen }) => 
    <HamburgerContainer className={isOpen ? "open" : "closed"} onClick={() => setIsOpen(!isOpen)}>
        <HamburgerBar></HamburgerBar>
        <HamburgerBar></HamburgerBar>
        <HamburgerBar></HamburgerBar>
    </HamburgerContainer>

export default NavBar