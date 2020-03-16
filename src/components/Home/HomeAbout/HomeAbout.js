import React from 'react'
import './HomeAbout.css'

const HomeAbout = () => {
    return(
        <div className="about">
            <div className="about--info">
                <div className="about--info__item">
                    <h2 className="about--info__item--header gothic">RTD is...</h2>
                    <p className="about--info__item--text">…A Cult for those who run religiously.</p> 
                    <p className="about--info__item--text">…For competitive runners who organize their lives around TRAINING TO RACE.</p>
                    <p className="about--info__item--text">…For those who want to be the fastest possible runners they can be. Regardless of level. Till Death.</p>
                    <p className="about--info__item--text">The Long Run is our Church. Miles are the Magick. A PR is your Rite.</p>
                </div>
                <div className="about--info__item">
                    <h2 className="about--info__item--header gothic">RTD is not...</h2>
                    <p className="about--info__item--text">…For everyone.</p> 
                    <p className="about--info__item--text">…Where you will be overtrained or burned out.</p>
                    <p className="about--info__item--text">…For beginners. For those who run for “fitness” or simply to finish.</p>
                    <p className="about--info__item--text">…A social club. For your social media personae.</p>
                    <p className="about--info__item--text">We are here to be our fastest running selves, every race, every year, Till Death.</p>
                </div>
            </div>
            <div className="about--banner">
                <div className="about--image parallax"></div>
            </div>
            <div className="about--section">
                <div>
                    <h1 className="about--section-header gothic">Coaching Services</h1>
                </div>
                <div className="about__content">
                    <p className="about--section-info">
                        Justin Torres comes to us with over 20 years of proven middle and long distance divination. You are in good hands if you are chosen…
                    </p>
                    <button className="about--section-btn">Explore the Ceremony</button>
                </div>
            </div>
            <div className="about--banner">
                <div className="about--image-2 parallax"></div>
            </div>
        </div>
    )
}

export default HomeAbout