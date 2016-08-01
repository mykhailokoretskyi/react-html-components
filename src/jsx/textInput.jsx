'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import InputBox from './inputBox';

export default class TextInput extends BaseInputWrapper{
    constructor(props){
        super();
    }

    render(){
        return (
            <InputBox {...this.props} type="text" ref="input" />
        );
    }
}
