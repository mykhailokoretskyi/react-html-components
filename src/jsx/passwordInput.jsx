'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import Input from './input';

export default class PasswordInput extends BaseInputWrapper{
    constructor(props){
        super();
    }

    render(){
        return (
            <Input {...this.props} type="password" ref="input" />
        );
    }
}
