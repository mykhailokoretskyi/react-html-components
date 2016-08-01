'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import InputInline from './inputInline';

export default class Checkbox extends BaseInputWrapper{
    constructor(props){
        super(props);
    }

    render(){
        let extraClass = this.props.extraClass || '';
        extraClass += this.props.filledIn ? " filled-in" : "";
        return (
            <InputInline {...this.props} extraClass={extraClass} type="checkbox" ref="input" />
        );
    }
}

Checkbox.propTypes = {
    filledIn:           React.PropTypes.bool
};

Checkbox.defaultProps = {
    filledIn:           false
};
