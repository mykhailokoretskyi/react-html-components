'use strict';

import React from 'react';
import Input from './input.jsx';

export default class TextInput extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return (
            <Input type="text" {...this.props}/>
        );
    }
}
