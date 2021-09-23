import React from "react"

import {Container, Wrapper, InnerWrapper, Left, TiltWrapper} from "./styles";
import {background, hero} from "../../Assets/index"
import HeroText from "../HeroText/HeroText.component";

const Hero = () => {
    return (
        <Container background={background}>
            <Wrapper>
                <InnerWrapper>
                    <Left>
                        <HeroText/>
                    </Left>
                    <TiltWrapper options={{max: 25}}>
                        <img src={hero} alt=""/>
                    </TiltWrapper>
                </InnerWrapper>
            </Wrapper>
        </Container>
    )
}

export default Hero