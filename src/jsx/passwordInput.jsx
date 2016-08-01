'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import InputBox from './inputBox.jsx';

export default class PasswordInput extends BaseInputWrapper{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <InputBox {...this.props} type="password" ref="input" />
        );
    }
}
