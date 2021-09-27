import React from "react"
import PropTypes from "prop-types"
import style from "./Header.module.scss"

const Header = ({title, subtitle}) => {
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <div className={style.subtitle}>{subtitle}</div>
        </div>
    )
}

Header.defaultProps = {
    title: "Welcome to Nothing",
    subtitle: "Please register your account"
}

Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Header