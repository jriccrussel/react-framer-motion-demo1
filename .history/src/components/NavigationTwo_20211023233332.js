import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container, Flex } from '../styles/GlobalStyles'
import {
    Nav,
    NavHeader,
    CloseNav,
    NavList,
    NavFooter,
    NavVideos,
} from '../styles/NavigationStyles'

import NavVidOne from "../assets/video/featured-video.mp4"
import NavVidTwo from "../assets/video/easy.mp4"
import NavVidThree from "../assets/video/make-it-zero.mp4"
import NavVidFour from "../assets/video/it-takes-an-island.mp4"
import NavVidFive from "../assets/video/50-beaches.mp4"

const routes = [
    {
        id: 0,
        title: "not humble",
        path: "/not-humble",
        video: NavVidOne,
    },
    {
        id: 1,
        title: "bleeping easy",
        path: "/bleeping-easy",
        video: NavVidTwo,
    },
    {
        id: 2,
        title: "make it zero",
        path: "/make-it-zero",
        video: NavVidThree,
    },
    {
        id: 3,
        title: "it takes an island",
        path: "/it-takes-an-island",
        video: NavVidFour,
    },
    {
        id: 4,
        title: "50 beaches",
        path: "/50-beaches",
        video: NavVidFive,
    },
]

const NavigationTwo = ({ onCursor, toggleMenu, setToggleMenu}) => {
    // hover video show
    // state
    const [showVideo, setShowVideo] = useState({
        show: false,
        video: NavVidOne,
        key: "0",
    })

    return (
        <>  
            <AnimatePresence>
                {toggleMenu && 
                    <Nav
                        initial={{x: "-100%"}}
                        exit={{x: "-100%"}}
                        animate={{x: toggleMenu ? 0 : "-100%"}}
                        transition={{duration: 0.8, ease: [ 0.6 , 0.05 , -0.01 , 0.9 ]}}
                    >
                        <Container>
                            <NavHeader>
                                <Flex spaceBetween noHeight>
                                    <h2>Projects</h2>
                                    <CloseNav
                                        onClick={() => setToggleMenu(!toggleMenu)}
                                        onMouseEnter={() => onCursor("pointer")}
                                        onMouseLeave={onCursor}
                                    >
                                        <button>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </CloseNav>
                                </Flex>
                            </NavHeader>
                            <NavList>
                                <ul>
                                    {/* <li>
                                        <Link to="/project-name">
                                            <div className="link">
                                                <span className="arrow">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 101 57"
                                                    >
                                                        <path
                                                            d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                            fill="#FFF"
                                                            fillRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                NOT HUMBLE
                                            </div>
                                        </Link>
                                    </li> */}
            
                                    {routes.map((route) => {
                                        const {id, title, path, video} = route
            
                                        return (
                                            <motion.li
                                                key={id}
                                                onHoverStart={() => {
                                                    setShowVideo({
                                                        show: true,
                                                        video: video,
                                                        key: id,
                                                    })
                                                }}
            
                                                onHoverEnd={() => {
                                                    setShowVideo({
                                                        show: false,
                                                        video: video,
                                                        key: id,
                                                    })
                                                }}
                                            >
                                                <Link to={path}>
                                                    {/* hover arrow show */}
                                                    <motion.div
                                                        initial={{ x: -108 }}
                                                        whileHover={{
                                                            x: -40,
                                                            transition: {
                                                                duration: 0.4 ,
                                                                ease: [0.6 , 0.05 , -0.01 , 0.9 ]
                                                            }
                                                        }}
                                                        className="link"
                                                    >
                                                        <span className="arrow">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 101 57"
                                                            >
                                                                <path
                                                                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                                    fill="#FFF"
                                                                    fillRule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                        {title}
                                                    </motion.div>
                                                </Link>
                                            </motion.li>
                                        )
                                    })}
                                </ul>
                            </NavList>
            
                            <NavFooter></NavFooter>
            
                            <NavVideos>
                                {/* WHEN IT HOVER THE LINK VIDEO WOULD SHOW */}
                                <motion.div animate={{ width: showVideo.show ? 0 : "100%" }} className="reveal"></motion.div>
                                
                                <div className="video">
                                    <AnimatePresence initial={false} exitBeforeEnter>
                                        <motion.video
                                            key={showVideo.key}                            
                                            src={showVideo.video}
                                            initial={{opacity: 0}}
                                            exit={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{
                                                duration: 0.2 ,
                                                ease: "easeInOut"
                                            }}
                                            loop
                                            autoPlay
                                        ></motion.video>
                                    </AnimatePresence>
                                </div>
                            </NavVideos>
                        </Container>
                    </Nav>
                }
            </AnimatePresence>
        </>
    )
}

export default NavigationTwo

// Step 1 - Setup navigation Component
// Step 2 - Parent Component|App.js before return add "const [toggleMenu, setToggleMenu] = useState(false)" the state should be the same so the toggle menu would run
// Step 3 - Parent Component|App.js -->"<Header/>" & "<NavigationTwo/>" add as prop "toggleMenu={toggleMenu}" && "setToggleMenu={setToggleMenu}" = "<Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>" && "<NavigationTwo toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>"
// Step 4 - "<Header/>" --> add "onClick={() => setToggleMenu(!toggleMenu)}" to "<Menu/>" = "<Menu onClick={() => setToggleMenu(!toggleMenu)}/>"



