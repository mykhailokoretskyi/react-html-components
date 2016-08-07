'use strict';

import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
    constructor(props){
        super(props);

        this._onClick = this._onClick.bind(this);

        this.state = {
            disabled: this.props.disabled
        };
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.disabled !== prevState.disabled){
            this.props.changeCallback();
        }
    }

    _onClick(e){
        if (!this.state.disabled) {
            this.props.clickCallback();
        }
    }

    getClassName(classes){
        return (classes && classes.length) ? classes.join(' ') : '';
    }

    disabled(v){
        if (typeof v === 'undefined'){
            return this.state.disabled;
        } else {
            this.setState({
                disabled: v
            });
        }
    }

    render(){
        const type = this.props.type ? `btn-${this.props.type}` : 'btn';
        const classes = this.props.classes;
        classes.push(type);
        if (this.state.disabled) {
            classes.push('disabled');
        }
        const className = this.getClassName(classes);
        return (
            <a className={className} onClick={this._onClick} >
                {this.props.children}
            </a>
        );
    }
}

Button.types = [
    '',
    'flat',
    'floating',
    'large'
];

Button.propTypes = {
    type:           PropTypes.oneOf(Button.types),
    disabled:       PropTypes.bool,
    classes:        PropTypes.array,
    changeCallback: PropTypes.func,
    clickCallback:  PropTypes.func
};

Button.defaultProps = {
    type:           '',
    disabled:       false,
    classes:        [],
    changeCallback: function(){},
    clickCallback:  function(){}
};
