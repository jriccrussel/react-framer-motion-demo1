import { useState, useEffect } from "react"

// Hover Locked function setup
export default function useElePos(el) {
  function getElement(x, y) {
    return {
      x: x,
      y: y,
    }
  }

  const [elementPosition, setElementPosition] = useState(getElement)

  useEffect(() => {
    function handlePosition() {
      let element = el.current
      let x =
        element.getBoundingClientRect().left +
        document.documentElement.scrollLeft +
        element.offsetWidth / 2
      let y =
        element.getBoundingClientRect().top +
        document.documentElement.scrollTop +
        element.offsetHeight / 2
      setElementPosition(getElement(x, y))
    }
    handlePosition()
  }, [el])

  return elementPosition
}


// HOVER LOCKED CUSTOM HOOK SETUP:
// Step 1 - Setup useElePos custom hook
// Step 2 - Header.js --> before return --> Add "const hamburger = useRef(null)"
// Step 3 - Header.js --> before return --> Add "const position = useElePos(hamburger)"
// Step 4 - Header.js --> Add "ref={hamburger}" === "<Menu ref={hamburger} />"
// Step 5 - Addp.js --> before return --> Add useState "const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0, })"
// Step 6 -
// Step 7 -
// Step 8 -
// Step 9 -
// 
// 
// 
// 
// 
// 
