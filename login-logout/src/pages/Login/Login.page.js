import React from "react"

import {Input} from "../../components";
import style from "./sample.module.scss"


const Login = ({handleClick, handleChangeValue}) => {
    return (
        <div className={style.container}>
            <Input
                onChange={(e) => handleChangeValue(e.target.value)}
                onClick={() => handleClick()}
                label="Email"
            />
            <Input
                onChange={(e) => handleChangeValue(e.target.value)}
                onClick={() => handleClick()}
                label="Password"
                type="password"
            />
        </div>
    )
}

export default Login