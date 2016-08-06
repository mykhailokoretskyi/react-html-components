'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import Input from './input';

export default class InputBox extends BaseInputWrapper {
    constructor(props) {
        super(props);

        this._onBlur = this._onBlur.bind(this);
        this._onFocus = this._onFocus.bind(this);

        this.state = {
            active: !!props.value
        };
    }

    _onFocus(){
        this.setState({
            active: true
        });
    }

    _onBlur(){
        this.setState({
            active: !!this.ref.input.value()
        });
    }

    render(){
        let {errorMessage, successMessage, label, ...other} = this.props;

        other.blurCallback = this._onBlur;
        other.focusCallback = this._onFocus;

        let labelClass = this.state.active ? 'active' : '';

        return (
            <div className="input-field col s12">
                <Input {...other} ref="input" />
                <label htmlFor={other.id}
                       className={labelClass}
                       data-error={errorMessage}
                       data-success={successMessage}
                       dangerouslySetInnerHTML={{__html: label}} />
            </div>
        );
    }
}

InputBox.displayName = "InputBox";
InputBox.propTypes = {
    errorMessage:       React.PropTypes.string,
    successMessage:     React.PropTypes.string
};
InputBox.defaultProps = {
    errorMessage:       '',
    successMessage:     ''
};
