import React from 'react'
import HomeBanner from './HomeSection/HomeBanner'
import HomeContent from './HomeSection/HomeContent'
import HomeFeatured from './HomeSection/HomeFeatured'

// Context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/context'


const HomeMain = () => {

    const {cursorStyles} = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {
        cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
        dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    return (
        <>
            <HomeBanner onCursor={onCursor}/>
            <HomeContent />
            <HomeFeatured onCursor={onCursor}/>
        </>
    )
}

export default HomeMain
