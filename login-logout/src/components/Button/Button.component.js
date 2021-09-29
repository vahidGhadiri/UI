import React from "react"
import PropTypes from "prop-types"

import style from "./Button.module.scss"

const Button = ({text}) => {
    return (
        <div className={style.container}>
            <button>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    text: "SUBMIT"
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button