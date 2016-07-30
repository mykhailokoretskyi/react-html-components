'use strict';

import React from 'react';

const STATUS = {
    NORMAL: 'normal',
    HOVERED: 'hovered',
};


export default class Input extends React.Component {
    constructor() {
        super();

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.state = {
            class: STATUS.NORMAL,
        };
    }

    _onMouseEnter() {
        this.setState({class: STATUS.HOVERED});
    }

    _onMouseLeave() {
        this.setState({class: STATUS.NORMAL});
    }
    render(){
        return (
            <input required={this.props.required} className={this.state.class}
                   onMouseEnter={this._onMouseEnter}
                   onMouseLeave={this._onMouseLeave}/>
        );
    }
}

Input.displayName = "GenericInputElement";
Input.propTypes = {
    required:    React.PropTypes.bool
};
