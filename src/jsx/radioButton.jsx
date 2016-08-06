'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import InputInline from './inputInline';

export default class RadioButton extends BaseInputWrapper{
    constructor(props){
        super(props);
    }

    render(){
        const { withGap, ...other } = this.props;
        other.extraClass = other.extraClass || '';
        other.extraClass += withGap ? " with-gap" : "";
        return (
            <InputInline {...other} type="radio" ref="input" />
        );
    }
}

RadioButton.propTypes = {
    withGap:        React.PropTypes.bool
};

RadioButton.defaultProps = {
    withGap:        false
};
