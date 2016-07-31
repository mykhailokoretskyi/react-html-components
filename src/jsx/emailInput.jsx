'use strict';

import React from 'react';
import BaseInputWrapper from './baseInputWrapper';
import Input from './input';

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
