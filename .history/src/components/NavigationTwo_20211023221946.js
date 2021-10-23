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

const NavigationTwo = () => {
    return (
        <Nav>
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
                    <li>

                    </li>
                </ul>
            </NavList>
        </Nav>
    )
}

export default NavigationTwo
