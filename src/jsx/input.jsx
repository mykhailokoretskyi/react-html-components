'use strict';

import React from 'react';

export default class Input extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <input required={this.props.required} />
        );
    }
}

Input.displayName = "GenericInputElement";
Input.propTypes = {
    required:    React.PropTypes.bool
};
