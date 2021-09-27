import React from "react"

import {Container} from "./Login.style";
import {Input} from "../../components";


const Login = ({handleClick, handleChangeValue}) => {
    return (
        <Container>
            <Input
                onChange={(e) => handleChangeValue(e.target.value)}
                onClick={() => handleClick()}/>
        </Container>
    )
}

export default Login