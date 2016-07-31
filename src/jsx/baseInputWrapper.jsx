'use strict';

import React from 'react';

export default class BaseInputWrapper extends React.Component{
    constructor(props){
        super();
    }

    componentDidMount(prevProps, prevState){
        if (!this.refs.input){
            throw new Error("Input parent class should have reference to Input");
        }
    }

    value(v){
        return this.refs.input.value(v);
    }
}
