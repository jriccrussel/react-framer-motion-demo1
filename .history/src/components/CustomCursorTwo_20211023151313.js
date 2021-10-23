import React, { useEffect, useState } from 'react'

import { Cursor } from '../styles/GlobalStyles'

const CustomCursorTwo = () => {

    const [mousePos, setMousePos] = useState({
        x: 400,
        y: 400, 
    })

    const onMouseGo = event => {
        const { pageX: x, pageY: y} = event
        setMousePos(x, y)
    }

    useEffect(() => {
        document.addEventListener("mousemouse", onMouseGo)

        return () => {
            document.removeEventListener("mousemouse", onMouseGo)
        }
    }, [])

    return (
        <>
            <Cursor 
                style={{left: `${mousePos.x}px`, top: `${mousePos.y}px`}}
            />
        </>
    )
}

export default CustomCursorTwo
