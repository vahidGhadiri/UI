import React from "react"
import PropTypes from "prop-types"

import {Mode, Type} from "./Input.options";
import style from "./Input.module.scss"

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
        this.state = {
            value: "",
            mode: Mode.view
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // const {mode: prevMode} = this.state
        // const {mode: nextMode} = nextState

        return true
    }


    handleClick = () => {
        this.setState({
            mode: Mode.edit
        })
    }

    handleChangeValue = (value) => {
        this.setState({value})
    }

    handleBlur = () => {
        this.setState({
            mode: Mode.view
        })
    }

    render() {
        const {label, type, mainClass} = this.props
        const {value} = this.state

        return (
            <div className={`${style.container}  ${mainClass}`}>
                <input
                    id="input"
                    type={type}
                    value={value}
                    ref={this.inputRef}
                    onClick={() => this.handleClick()}
                    onBlur={() => this.handleBlur()}
                    onChange={({target}) => {
                        this.handleChangeValue(target.value)
                        console.log(target)
                    }}
                    required
                    autoComplete="off"
                />
                <label htmlFor="input" className={style.label}>{label}</label>
            </div>
        )
    }
}

Input.defaultProps = {
    label: "Name",
    type: Type.text,
    value: '',
    mainClass: ""
}

Input.propTypes = {
    Name: PropTypes.string,
    value: PropTypes.string,
    mainClass: PropTypes.string
}

export default Input