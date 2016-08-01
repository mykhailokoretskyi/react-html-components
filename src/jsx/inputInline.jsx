'use strict';

import React from 'react';
import BaseInputWrapper from "./baseInputWrapper";
import Input from './input';

export default class InputInline extends BaseInputWrapper{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <p>
                <Input {...this.props} ref="input" />
                <label dangerouslySetInnerHTML={{__html: this.props.label}}
                       data-error={this.props.errorMessage}
                       data-success={this.props.successMessage}
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
