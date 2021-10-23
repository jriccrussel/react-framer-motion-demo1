import { useState, useEffect } from 'react'

import { useGlobalDispatchContext, useGlobalStateContext } from "../context/context";

export default function cursorTwo() {
    const { cursorStyles} = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    function onCursor(cursorType){

        cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
        dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }
}

