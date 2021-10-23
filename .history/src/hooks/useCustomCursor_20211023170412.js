import { useGlobalDispatchContext, useGlobalStateContext } from "../context/context";

export const onCursor = cursorType => {
    const { cursorStyles} = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
}