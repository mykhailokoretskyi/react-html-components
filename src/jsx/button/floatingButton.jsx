'use strict';

import React, { Component } from 'react';
import Button from './button';

export default class FloatingButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Button {...this.props} type="floating">
                { this.props.children }
            </Button>
        );
    }
}
