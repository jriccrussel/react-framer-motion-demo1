import React from 'react'
import HomeBanner from './HomeSection/HomeBanner'
import HomeContent from './HomeSection/HomeContent'
import HomeFeatured from './HomeSection/HomeFeatured'
import HomeAbout from './HomeSection/HomeAbout'

// Context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/context'

const HomeMain = ({onCursor}) => {

    return (
        <div
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
        >
            <HomeBanner onCursor={onCursor}/>
            <HomeContent onCursor={onCursor}/>
            <HomeFeatured onCursor={onCursor}/>
            <HomeAbout onCursor={onCursor}/>
        </div>
    )
}

export default HomeMain
