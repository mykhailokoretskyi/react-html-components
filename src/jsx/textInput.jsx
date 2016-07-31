'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper.jsx';
import Input from './input.jsx';

export default class TextInput extends BaseInputWrapper{
    constructor(props){
        super();
    }

    render(){
        return (
            <Input {...this.props} type="text" ref="input" />
        );
    }
}