'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import InputBox from './inputBox';

export default class EmailInput extends BaseInputWrapper{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <InputBox {...this.props} type="email" ref="input" />
        );
    }
}
