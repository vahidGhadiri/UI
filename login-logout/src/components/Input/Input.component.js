import React from "react"
import PropTypes from "prop-types"

import {Mode, Type} from "./Input.options";
import {Container} from "../../pages/Login/Login.style";


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
        const {mode: prevMode} = this.state
        const {mode: nextMode} = nextState

        return true
    }


    handleClick = (name) => {
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
        const {placeholder, type} = this.props
        const {value} = this.state

        return (
            <Container>
                <input
                    placeholder={placeholder}
                    ref={this.inputRef}
                    type={type}
                    value={value}
                    onClick={() => this.handleClick()}
                    onBlur={() => this.handleBlur()}
                    onChange={({target}) => this.handleChangeValue(target.value)}
                />
            </Container>
        )
    }
}

Input.defaultProps = {
    placeholder: "Type some fucking shit!",
    type: Type.text,
    value: ''
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string
}

export default Input