import React from "react"

import {Input} from "../../components";
import style from "./Login.module.scss"
import image from '../../asset/images/image.jpg'


const Login = ({handleClick, handleChangeValue}) => {
    return (
        <div className={style.container}>

            <div className={style.formContainer}>
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
            <div className={style.imageContainer}>
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default Login