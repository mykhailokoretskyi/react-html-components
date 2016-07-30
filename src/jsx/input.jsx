'use strict';

import React from 'react';

export class Input extends React.Component {
    static displayName = "GenericInputElement";
    static propTypes = {
        required:    React.PropTypes.bool
    };
    constructor(props){

    }
    render(){
        return (
            <input required={this.props.required} />
        );
    }
}
