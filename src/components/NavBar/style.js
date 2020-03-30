import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    position: fixed;
    width: 100%;
    height: 5rem;
    padding: 2rem;
    z-index: 999;
    background-color: #000;
`

export const NavLogo = styled.div`
    font-size: 1.2rem;
`

export const NavList = styled.div`
    width: 35%;
    font-size: 17.6px;
`

export const NavItems = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-around;
`