import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Flex } from '../../styles/GlobalStyles'

import { 
    HomeFeaturedSection,
    FeaturedVideo,
    FeaturedContent,
    FeaturedProjects,
} from '../../styles/HomeStyles'

const HomeFeatured = () => {
    return (
        <HomeFeaturedSection>
            <Container>
                <Link to="/">
                    <FeaturedContent>
                        <Flex>

                        </Flex>
                    </FeaturedContent>
                </Link>
            </Container>
        </HomeFeaturedSection>
    )
}

export default HomeFeatured
