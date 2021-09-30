import React from "react"
import PropTypes from "prop-types"

import style from "./Button.module.scss"

const Button = ({text, disabled}) => {
    return (
        <div className={style.container}>
            <button disabled={disabled}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    text: "SUBMIT",
    disabled: true
}

Button.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool
}

export default Button