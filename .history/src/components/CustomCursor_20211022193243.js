import React,{useState, useEffect} from 'react'

import { Cursor } from '../styles/GlobalStyles'

// Cursor Context
import { useGlobalStateContext } from '../context/context'

const CustomCursor = ({toggleMenu}) => {
    // Grabing the Cursor Context
    const {cursorType} = useGlobalStateContext()

    // Mouse Position Initial State
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400,
    })

    // Mouse Position Event 
    const onMouseMove = (event) => {
        const { pageX: x, pageY: y } = event
        setMousePosition({ x, y})
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
            />
        </>
    )
}

export default CustomCursor
