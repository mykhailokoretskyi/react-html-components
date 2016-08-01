'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import Input from './input';

export default class InputBox extends BaseInputWrapper {
    constructor(props) {
        let state = {};
        state.value = props.value;

        if (props.type == 'radio' || props.type == 'checkbox')
            state.checked = props.checked;

        super(props);

        this.state = state;
    }

    render(){
        let {errorMessage, successMessage} = this.props;
        return (
            <div className="input-field col s12">
                <Input {...this.props} ref="input" />
                <label htmlFor={this.props.id}
                       data-error={errorMessage}
                       data-success={successMessage}
                       dangerouslySetInnerHTML={{__html: this.props.label}} />
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
