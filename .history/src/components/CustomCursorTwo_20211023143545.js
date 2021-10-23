import React, { useEffect, useState } from 'react'

import { Cursor } from '../styles/GlobalStyles'

const CustomCursorTwo = () => {

    const [mousePos, setMousePos] = useState({
        x: 400,
        y: 400, 
    })

    return (
        <>
            <Cursor />
        </>
    )
}

export default CustomCursorTwo
