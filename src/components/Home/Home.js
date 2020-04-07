import React from 'react'
import '../../fonts/CloisterBlack.ttf'

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