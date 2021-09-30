import React from "react"

import {Button, Input} from "../../components";
import {Footer, Header} from "./components";

import style from "./Login.module.scss"
import image from '../../asset/images/image.gif'


const Login = ({handleClick, handleChangeValue}) => {
    return (
        <div className={style.container}>
            <div className={style.formContainer}>
                <Header/>
                <div className={style.inputContainer}>
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
                    <Button text="SIGN IN" disabled={true}/>
                </div>
                <Footer/>
            </div>
            <div className={style.imageContainer}>
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default Login