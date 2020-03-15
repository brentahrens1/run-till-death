import React from 'react'
import './HomeBanner.css'

import RTDLOGO from '../../../images/rtd-logo.PNG'

const HomeBanner = () => {
    return(
        <div className="banner">
            <div className="banner__section">
                <img className="banner--image" src={RTDLOGO} alt="run till death"></img>
                <button className="banner--btn">Take the Oath</button>
            </div>
        </div>
    )
}

export default HomeBanner