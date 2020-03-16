import React from 'react'
import './Home.css'

import HomeBanner from './HomeBanner/HomeBanner'
import HomeAbout from './HomeAbout/HomeAbout'

const Home = () => {
    return(
        <div>
            <HomeBanner />
            <HomeAbout />
        </div>
    )
}

export default Home