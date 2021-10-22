import React, {useEffect} from 'react'

// Scroll Behavior
import { useInView } from 'react-intersection-observer'

// Animation
import { useAnimation } from 'framer-motion'

// Styles
import { Container} from '../../styles/GlobalStyles'
import { HomeContentSection , Content} from '../../styles/HomeStyles'

// Context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/context'

const HomeContent = () => {
    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-300px",
    })

    const {cursorStyles} = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {
        cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
        dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }
    
    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <HomeContentSection
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
                visible: {
                opacity: 1,
                y: 0,
                    transition: { duration: 0.8 , ease: [ 0.6 , 0.05 , -0.01 , 0.9 ] },
                },
                hidden: { opacity: 0, y: 72 },
            }}

            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
        >
            <Container>
                <Content>
                Great stories don’t just happen— <br /> they need to be uncovered. And
                we dig deep to discover the great stories that lie just below the
                surface. Dirt under our fingernails and all.
                </Content>
            </Container>
        </HomeContentSection>
    )
}

export default HomeContent
