'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import InputInline from './inputInline';

export default class RadioButton extends BaseInputWrapper{
    constructor(props){
        super(props);
    }

    render(){
        let extraClass = this.props.extraClass || '';
        extraClass += this.props.withGap ? " with-gap" : "";
        return (
            <InputInline {...this.props} extraClass={extraClass} type="radio" ref="input" />
        );
    }
}

RadioButton.propTypes = {
    withGap:        React.PropTypes.bool
};

RadioButton.defaultProps = {
    withGap:        false
};
