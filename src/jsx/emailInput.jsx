'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper.jsx';
import Input from './input.jsx';

export default class EmailInput extends BaseInputWrapper{
    constructor(props){
        super();
    }

    render(){
        return (
            <Input {...this.props} type="email" ref="input" />
        );
    }
}
