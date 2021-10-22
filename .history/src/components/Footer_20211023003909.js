import React from 'react'
import { Container, Flex } from '../styles/GlobalStyles' 

import { FooterNav, FooterContent, FooterSocial } from '../styles/FooterStyles'

import { Instagram, Facebook, Vimeo } from '../assets/svg/social-icons'

const Footer = ({onCursor}) => {
    return (
        <FooterNav>
            <Container>
                <Flex>
                    <FooterContent>
                        <p>902.315.1279</p>
                        <p>info@furrow.studio</p>
                    </FooterContent>
                    <FooterContent wider>
                        <p>15 Camburhill Ct Unit C</p>
                        <p>Charlottetown, PE C1E 0E2</p>
                    </FooterContent>
                    <FooterSocial>
                        <a  
                            onMouseEnter={() => onCursor("hovered")}
                            onMouseLeave={onCursor}
                            href="/"
                        >
                            <Instagram />
                        </a>
                        <a 
                            onMouseEnter={() => onCursor("hovered")}
                            onMouseLeave={onCursor}
                            href="/"
                        >
                            <Facebook />
                        </a>
                        <a 
                            onMouseEnter={() => onCursor("hovered")}
                            onMouseLeave={onCursor}
                            href="/"
                        >
                            <Vimeo />
                        </a>
                    </FooterSocial>
                </Flex>
            </Container>
        </FooterNav>
    )
}

export default Footer
