import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import adminService from '../../utils/adminService'





const Footer = (props) => {

    const handleLogout = () => {
        adminService.logout()
        props.setCurrentAdmin(adminService.getAdmin())
    }

    return(
        <div className="footer">
            <div className="footer--content">
                <h1 className="footer--header">Run Till Death</h1>
                <div className="footer--items">
                    <p className="footer__item"><a href="https://www.instagram.com/runtilldeath/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                    <p className="footer__item"><a href="mailto:coach.just.torres@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
                    <p className="footer__item"><a href="https://www.strava.com/clubs/run-till-death-537646" target="_blank" rel="noopener noreferrer">Strava</a></p>
                    {
                        props.currentAdmin ? <p className="footer__item"><Link exact to="" onClick={handleLogout}>Logout</Link></p> 
                        : <p className="footer__item"><Link exact to='/admin-auth'>Admin</Link></p>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Footer