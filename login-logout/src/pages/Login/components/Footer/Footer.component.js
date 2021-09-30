import React from "react"
import style from "./Footer.module.scss"
import * as Icon from "react-icons/ri"


const Footer = () => {
    return (
        <div className={style.container}>
            <p>Create account with</p>
            <div className={style.buttonContainer}>
                <Icon.RiFacebookFill/>
                <Icon.RiGoogleFill/>
                <Icon.RiLinkedinFill/>
            </div>
        </div>
    )
}

export default Footer