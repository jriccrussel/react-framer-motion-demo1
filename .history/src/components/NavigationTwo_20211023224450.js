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

const NavigationTwo = () => {
    // hover video show
    // state
    const [showVideo, setShowVideo] = useState({
        show: false,
        video: NavVidOne,
        key: "0",
    })

    return (
        <Nav>
            <Container>
                <NavHeader>
                    <Flex spaceBetween noHeight>
                        <h2>Projects</h2>
                        <CloseNav>
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
                                <li key={id}>
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
                                            {title}
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </NavList>

                <NavFooter></NavFooter>

                <NavVideos>
                    <div className="reveal"></div>
                    <div className="video">
                        <video
                            src={showVideo.video}  
                            loop
                            autoPlay                   
                        ></video>
                    </div>
                </NavVideos>
            </Container>
        </Nav>
    )
}

export default NavigationTwo
