import { useGlobalDispatchContext, useGlobalStateContext } from "../context/context";

export default function cursorTwo() {
    const { cursorStyles} = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {

        cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
        dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }
}

