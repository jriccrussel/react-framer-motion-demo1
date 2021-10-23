import { useGlobalDispatchContext, useGlobalStateContext } from "../context/context";

export const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
}