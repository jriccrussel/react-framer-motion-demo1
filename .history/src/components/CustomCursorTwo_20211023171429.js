import React, { useEffect, useState } from 'react'

import { Cursor } from '../styles/GlobalStyles'

import { useGlobalStateContext } from '../context/context'

const CustomCursorTwo = () => {

    const [mousePos, setMousePos] = useState({
        x: 400,
        y: 400, 
    })

    const onMouseGo = event => {
        const { pageX: x, pageY: y } = event
        setMousePos({ x, y })
    }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseGo)

        return () => {
            document.removeEventListener("mousemove", onMouseGo)
        }
    }, [])

    return (
        <>
            <Cursor 
                className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${toggleMenu ? "nav-open" : ""}`}
                style={{left: `${mousePos.x}px`, top: `${mousePos.y}px`}}
            />
        </>
    )
}

export default CustomCursorTwo
