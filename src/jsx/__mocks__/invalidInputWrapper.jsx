'use strict';

import React from 'react';
import BaseInputWrapper from '../baseInputWrapper.jsx';

export default class InvalidInputWrapper extends BaseInputWrapper{
    constructor(props){
        super();
    }

    render(){
        return <div {...this.props}/>;
    }
}
