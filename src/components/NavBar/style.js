import styled, { keyframes } from 'styled-components'
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
    width: 45%;
    font-size: 17.6px;
    @media (max-width: 950px) {
        a {
            display: none;
        }
    }
`

export const NavItems = styled.ul`
    display: flex;
    position: relative;
    flex-direction: row;
    list-style: none;
    justify-content: space-around;
`

export const NavBarLink = styled(NavLink)`
    font-weight: 700;
    display: inline-block;
    &::after {
        content: '';
        display: block;
        background: #fff;
        width: 0;
        height: 2px;
        transition: width .3s;
        margin-top: .2rem;
    }
    &:hover::after {
        width: 100%;
    }
`

export const HamburgerContainer = styled.div`
    width: 40px;
    height: 25px;
    position: relative;
    display: none;
    margin-left: auto;
    cursor: pointer;
    z-index: 1000;
    @media (max-width: 950px) {
        display: block;
    }
`

export const HamburgerBar = styled.div`
    position: absolute;
    width: 25px;
    height: 3px;
    background: #fff;
    left: 0;
    transition: all .50s ease-in-out;
    &:nth-child(1) {
        top: 0;
    }
    &:nth-child(2) {
        top: 6px;
    }
    &:last-child {
        top: 12px;
    }
    .open > & {
        transition: all 1s ease-in-out;
    }
    .open > &:first-child {
        top: 45%;
        transform: rotate(135deg);
        transition: all .50s ease-in-out;
    }
    .open > &:nth-child(2) {
        opacity: 0;
        left: -60px;
        transition: all .50s ease-in-out;
    }
    .open > &:nth-child(3) {
        transform: rotate(-135deg);
        transition: all .50s ease-in-out;
    }
`

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background: #000;
    left: -120rem;
    transition: left .75s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 2.5rem;
    &.show {
        left: 0;
    }
    & > a {
        margin: .5rem 0;
    }
`

