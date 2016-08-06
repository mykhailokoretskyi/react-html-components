'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import Input from './input';

export default class InputBox extends BaseInputWrapper {
    constructor(props) {
        super(props);
    }

    render(){
        let {errorMessage, successMessage, label, ...other} = this.props;
        return (
            <div className="input-field col s12">
                <Input {...other} ref="input" />
                <label htmlFor={other.id}
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
