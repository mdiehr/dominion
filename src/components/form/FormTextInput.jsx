import React, { Component, PropTypes } from 'react';
import Input from 'react-bootstrap/lib/Input';

export default class FormTextInput extends Component {
    static get propTypes () {
        return {
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
            updateValue: PropTypes.func.isRequired,
            value: PropTypes.string.isRequired,
            rapid: PropTypes.bool
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: this.props.value || ''
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value || ''
        });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        const { name, updateValue, rapid } = this.props;
        if (rapid) {
            updateValue(name, event.target.value);
        }
    }

    handleBlur() {
        const { name, updateValue } = this.props;
        updateValue(name, this.state.value);
    }

    render () {
        const {name, label, placeholder, type} = this.props;
        var style = {marginBottom: '6px'};
        var value = this.state.value;
        return (
            <Input
                block
                required
                type={type || 'text'}
                name={name}
                style={style}
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={::this.handleChange}
                onBlur={::this.handleBlur}
                />
        );
    }
}
