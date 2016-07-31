'use strict';

import React from 'react';
import Input from '../input.jsx';
import BaseInputWrapper from '../baseInputWrapper.jsx';

export default class ValidInputWrapper extends BaseInputWrapper{
    constructor(props){
        super();
    }

    render(){
        return <Input {...this.props} ref="input" />;
    }
}
