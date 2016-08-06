'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import InputInline from './inputInline';

export default class Checkbox extends BaseInputWrapper{
    constructor(props){
        super(props);
    }

    render(){
        const {filledIn, ...other} = this.props;
        other.extraClass = other.extraClass || '';
        other.extraClass += filledIn ? " filled-in" : "";
        return (
            <InputInline {...other} type="checkbox" ref="input" />
        );
    }
}

Checkbox.propTypes = {
    filledIn:           React.PropTypes.bool
};

Checkbox.defaultProps = {
    filledIn:           false
};
