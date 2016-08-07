'use strict';

import React, { Component } from 'react';
import Button from './button';

export default class FlatButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Button {...this.props} type="flat">
                { this.props.children }
            </Button>
        );
    }
}
