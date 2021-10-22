import React,{useState, useEffect, useRef} from 'react'

import { Cursor } from '../styles/GlobalStyles'

// Cursor Context
import { useGlobalStateContext } from '../context/context'

const CustomCursor = ({toggleMenu}) => {
    // Grabing the Cursor Context
    const {cursorType} = useGlobalStateContext()
    const cursor = useRef(null)

    // Mouse Position Initial State
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400,
    })

    // Mouse Position Event 
    const onMouseMove = (e) => {
        const { clientX, clientY } = event
        cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
    }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    }, [])

    return (
        <>
            <Cursor
                className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${toggleMenu ? "nav-open" : ""}`}
                style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}
                ref = {cursor}
            />
        </>
    )
}

export default CustomCursor
