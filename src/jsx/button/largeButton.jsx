'use strict';

import React, { Component } from 'react';
import Button from './button';

export default class LargeButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Button {...this.props} type="large">
                { this.props.children }
            </Button>
        );
    }
}
