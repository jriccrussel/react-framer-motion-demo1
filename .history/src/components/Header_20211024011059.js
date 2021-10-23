import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HeaderNav, Logo, Menu } from '../styles/HeaderStyles'
import { Container, Flex } from '../styles/GlobalStyles'
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/context'

// Menu Locked
import useElementPosition from '../hooks/useElementPosition'


import useElePos from '../hooks/useElePos'


const Header = ({ onCursor, toggleMenu, setToggleMenu, menuPosition, setMenuPosition }) => {
    const dispatch = useGlobalDispatchContext()
    const { currentTheme } = useGlobalStateContext()

    const hamburger = useRef(null)

    const position = useElementPosition(hamburger)

    const position = useElePos(hamburger)

    const toggleTheme = () => {
        if(currentTheme === "dark") {
            dispatch({ type: "TOGGLE_THEME", theme: "light" })
        } else {
            dispatch({ type: "TOGGLE_THEME", theme: "dark" })
        }
    }

    // Menu Hover Locked 
    const menuHover = () => {
        onCursor("locked")
        setMenuPosition({ x: position.x, y: position.y + 72 })
    }

    // CustomCursorTwo
    const {cursorStyles} = useGlobalStateContext()
    // const dispatch = useGlobalDispatchContext()

    const customCursor = cursorType => {
        cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
        dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    // INLINE FUNCTION:
    // onMouseEnter={() => customCursor("hovered")}
    // onMouseLeave={customCursor}

    // End CustomCursorTwo

    useEffect(() => {
        window.localStorage.setItem("theme", currentTheme)
    }, [currentTheme])

    return (
        <HeaderNav
            animate={{y: 0, opacity: 1}}
            initial={{y: -72, opacity: 1}}
            transition={{
                duration: 1,
                ease: [ 0.6 , 0.05 , -0.01 , 0.9 ],
            }}
        >
            <Container>
                <Flex spaceBetween noHeight>
                    <Logo
                        onMouseEnter={() => onCursor("hovered")}
                        onMouseLeave={onCursor}
                    > 
                        <Link to="/">FURR</Link>
                        <span
                            onClick={toggleTheme}
                            onMouseEnter={() => onCursor("pointer")}
                            onMouseLeave={onCursor}
                        ></span>
                        <Link to="/">FURR</Link>
                    </Logo>
                    <Menu
                        ref={hamburger}
                        onClick={() => setToggleMenu(!toggleMenu)}
                        // onMouseEnter={() => onCursor("hovered")}
                        onMouseEnter={menuHover}
                        onMouseLeave={onCursor}
                    >
                        <button>
                            <span></span>
                            <span></span>
                        </button>
                    </Menu>
                </Flex>
            </Container>
        </HeaderNav>
    )
}

export default Header
