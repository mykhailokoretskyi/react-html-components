'use strict';

import React from 'react';
import BaseInputWrapper from "./baseInputWrapper";
import Input from './input';

export default class InputInline extends BaseInputWrapper{
    constructor(props){
        super(props);
    }

    render(){
        const { label, errorMessage, successMessage, ...other } = this.props;
        other.placeholder = '';

        return (
            <p>
                <Input {...other} ref="input" />
                <label dangerouslySetInnerHTML={{__html: label}}
                       data-error={errorMessage}
                       data-success={successMessage}
                       htmlFor={this.props.id} />
            </p>
        );
    }
}

InputInline.propTypes = {
    errorMessage:       React.PropTypes.string,
    successMessage:     React.PropTypes.string
};

InputInline.defaultProps = {
    errorMessage:       '',
    successMessage:     ''
};
