import React from "react"
import style from "./Header.module.scss"

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>Welcome to our site</div>
            <div className={style.subtitle}>This is just the beginning...</div>
        </div>
    )
}
export default Header