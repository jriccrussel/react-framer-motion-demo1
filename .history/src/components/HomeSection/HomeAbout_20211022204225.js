import React, { useState, useEffect } from 'react'
import { Container, Flex } from '../../styles/GlobalStyles'

import { 
    About, 
    HomeAboutSection, 
    Services, 
    AccordionHeader, 
    AccordionIcon, 
    AccordionContent 
} from '../../styles/HomeStyles'

// Accordion Data
const accordionIds = [
    {
        id: 0,
        title: "Pre-Production",
        results: [
            "Creative Development",
            "Writing",
            "Creative Development",
            "Writing",
            "Storyboards",
            "Art Direction",
            "Creative Direction",
            "Location Scouting",
            "Casting",
        ],
    },
    {
        id: 1,
        title: "Video Production",
        results: [
            "Principle Photography",
            "Production Management",
            "Crew",
            "Dailies",
            "LTO-Archiving",
        ],
    },
    {
        id: 2,
        title: "Post-Production",
        results: [
            "Colour correction",
            "Offline editing",
            "Online editing",
            "VFX",
            "Animation and motion graphics",
            "Closed captioning and subtitles",
            "Descriptive video",
            "Dailies",
            "Quality control",
            "LTO Archiving",
        ],
    },
    {
        id: 3,
        title: "Audio Post-Production",
        results: [
            "We work with some amazing partners who provide:",
            "Sound Design",
            "SFX",
            "Music",
            "Sound Mix",
        ],
    },
]

const HomeAbout = () => {
    const [expanded, setExpanded] = useState(3)

    return (
        <HomeAboutSection>
            <Container>
                <Flex alignTop>
                    <About>
                        <h2>
                            Furrow is an integrated, full-service creative studio offering
                            video production, creative development, and post-production
                            services.
                        </h2>
                        <p>
                            Everybody’s got a story. And we don’t stop until we’ve uncovered
                            what makes yours worth telling. Whether it’s working directly with
                            you, an agency partner, or putting the finishing touches on
                            something special, we’re ready to dig in and get our hands
                            dirty—are you?
                        </p>
                    </About>
                    <Services>
                        <h3>Services</h3>
                        {accordionIds.map((details, index) => {
                            return (
                                <Accordion
                                    key={index}
                                    details={details}
                                    expanded={expanded}
                                    setExpanded={setExpanded}
                                />
                            )
                        })}
                    </Services>
                </Flex>
            </Container>
        </HomeAboutSection>
    )
}

const Accordion = ({ details, expanded, setExpanded }) => {
    const {id, title, results} = details

    const isOpen = id === expanded

    return (
        <>
            <AccordionHeader>
                <AccordionIcon>
                    <span></span>
                    <span></span>
                </AccordionIcon>
                {title}
            </AccordionHeader>
            <AccordionContent
                key="content"
                animate={{ height: isOpen ? "100%" : "0" }}
                transition={{ duration: 0.8 , ease: [ 0.6 , 0.05 , -0.01 , 0.9 ] }}
            >
                {results.map((result, index) => (
                    <span key={index}>{result}</span>
                ))}
            </AccordionContent>
        </>
    )
}

export default HomeAbout
