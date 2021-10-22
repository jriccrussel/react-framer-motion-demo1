import React from 'react'
import { Container, Flex } from '../../styles/GlobalStyles'
import { HomeAboutSection } from '../../styles/HomeStyles'

const HomeAbout = () => {
    return (
        <HomeAboutSection>
            <Container>
                <Flex>
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
                </Flex>
            </Container>
        </HomeAboutSection>
    )
}

export default HomeAbout
