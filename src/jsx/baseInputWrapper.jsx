'use strict';

import React from 'react';

export default class BaseInputWrapper extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(prevProps, prevState){
        if (!this.refs.input){
            throw new Error("Input parent class should have reference to Input");
        }
    }

    value(v){
        return this.refs.input.value(v);
    }

    checked(v){
        return this.refs.input.checked(v);
    }

    required(v){
        return this.refs.input.required(v);
    }

    disabled(v){
        return this.refs.input.disabled(v);
    }

    type(){
        return this.refs.input.type();
    }
}
