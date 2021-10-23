import React, { createContext, useReducer, useContext } from 'react'

//Define Conext
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    // Dark Mode Theme
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.theme,
      }
    }
    // Cursor Styles
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const onCursor = cursorType => {
  cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
  dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
}

//Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    // currentTheme: "dark",
    currentTheme: window.localStorage.getItem("theme") == null ? "dark" : window.localStorage.getItem("theme"),
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "locked"],
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state, onCursor}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)