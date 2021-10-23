import React, {useState} from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import normalize from 'styled-normalize'
import './App.css'

// Context
import { useGlobalStateContext, useGlobalDispatchContext } from './context/context'

// Components
import Header from './components/Header'
import CustomCursor from './components/CustomCursor'
import HomeMain from './components/HomeMain'
import Navigation from './components/Navigation'
import Footer from './components/Footer'


import CustomCursorTwo from './components/CustomCursorTwo'
import NavigationTwo from './components/NavigationTwo'


// Global Styling 
const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
  }
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }
  body {
    font-size: 16px;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

function App() {

  const [menuPosition, setMenuPosition] = useState({
    x: 0,
    y: 0,
  })
  
  // Dark mode toogle
  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
    left: `${menuPosition.x}px`,
    top: `${menuPosition.y}px`,    
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
    left: `${menuPosition.x}px`,
    top: `${menuPosition.y}px`,
  }

  // "currentTheme" - Dark mode theme toggle Context
  // "cursorStyles" - cursor styles
  const {currentTheme, cursorStyles} = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  // Cursor Hover the Nav Logo
  // Context "CURSOR_TYPE" => const onCursor => <Header onCursor={onCursor}/> => const Header = ({ onCursor }) | onCursor as prop => <Logo onMouseEnter={() => onCursor("hovered")} onMouseLeave={onCursor}> | inig hover ang mouse mo change to border && <span onClick={toggleTheme} onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor} ></span> | inig hover sa red dot sa logo ang mouse border mo change ug color
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    // Context "TOGGLE_THEME" => set  <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}> => const toggleTheme && window.localStorage.setItem("theme", currentTheme) && <span onClick={toggleTheme} onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor} ></span> | inig click ma change ang color sa theme
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      {/* <CustomCursor toggleMenu={toggleMenu}/> */}
      <CustomCursorTwo toggleMenu={toggleMenu}/>
      <Header 
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
      />
      {/* <Navigation 
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      /> */}
      <NavigationTwo 
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <HomeMain onCursor={onCursor} />
      <Footer onCursor={onCursor} />
    </ThemeProvider>
  )
}

export default App
