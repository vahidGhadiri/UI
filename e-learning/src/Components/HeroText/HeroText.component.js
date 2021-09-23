import React from "react"
import {BtnContainer, Container} from "./styles";

const HeroText = () => {
    return (
        <Container>
            <h5>Online education for all ages</h5>
            <h1>Learn</h1>
            <h1>Anything.</h1>
            <h1>Anytime.</h1>
            <h1>Anywhere.</h1>
            <BtnContainer>
                <button>Read More</button>
                <button>7 Day Free Trial</button>
            </BtnContainer>
        </Container>
    )
}

export default HeroText