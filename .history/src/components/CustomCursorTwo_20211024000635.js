import React, { useEffect, useState } from 'react'

import { Cursor } from '../styles/GlobalStyles'

import { useGlobalStateContext } from '../context/context'

const CustomCursorTwo = ({toggleMenu}) => {
    const {cursorType} = useGlobalStateContext()

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
                // className={`${!!cursorType ? "hovered" : ""} ${cursorType}`}
                className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${toggleMenu ? "nav-open" : ""}`}
                style={{left: `${mousePos.x}px`, top: `${mousePos.y}px`}}
            />
        </>
    )
}

export default CustomCursorTwo


// Step 1 - CustomCursorTwo Component Setup && including the functions, state && useEffects
// Step 2 - Context.js --> "const globalReducer = (state, action) => {...}" sa "const [state, dispatch] = useReducer(globalReducer, {...}" ++ add case "case CURSOR_TYPE": {return }{ ..state, cursorType: action.cursorType,}}"
// Step 3 - Context.js --> "export const GlobalProvider = ({ children })..." sa "const [state, dispatch]..." ---> add "cursorType: false, cursorStyles: ["pointer", "hovered", "locked"],"
// Step 4 - Context.js --> Add prop value "<GlobalDispatchContext.Provider value={dispatch}>" && <GlobalStateContext.Provider value={state}>
// Step 5 - App.js --> Add "const {currentTheme, cursorStyles} = useGlobalStateContext()" && "const dispatch = useGlobalDispatchContext()"
// Step 6 - App.js --> Add "const onCursor = cursorType => {...}"
// Step 7 - App.js --> Add "onCursor" prop === "<Header onCursor={onCursor}/>"
// 
// 
// 
// 


