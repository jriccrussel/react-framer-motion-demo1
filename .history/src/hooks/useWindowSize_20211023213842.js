import { useState, useEffect } from 'react'

// Custom Hook Usage:
// Custom function to get the window size
export default function useWindowSize() {
    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }
  
    const [windowSize, setWindowSize] = useState(getSize)
  
    useEffect(() => {
      function handleResize() {
            setWindowSize(getSize())
      }
  
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
  
    return windowSize
}

// Component Usage:
// const [dimensions, setDimensions] = useState({
//     height: window.innerHeight,
//     width: window.innerWidth,
// })

// const handleResize = () => {
//   setDimensions({
//     height: window.innerHeight,
//     width: window.innerWidth,
//   })
// }

// window.addEventListener("resize", handleResize)

// return () => {
//   window.removeEventListener("resize", handleResize)
// }