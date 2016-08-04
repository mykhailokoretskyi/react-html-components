'use strict';

import React from 'react';
import _ from 'lodash';
import BaseInput from './abstract/BaseInput';

export default class Input extends BaseInput {
    constructor(props) {
        super(props);

        const stateAttributes = this.getStateAttributes(props.type);
        if(!stateAttributes.length){
            throw new Error("Invalid 'type' attribute!");
        }
        this.state = _.pick(props, stateAttributes);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this._onChange     = this._onChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        const inputType = this.getInputType(this.state.type);
        if (this.state[inputType] != prevState[inputType]){
            this.props.changeCallback();
        }
    }

    _onChange(e) {
        const inputType = this.getInputType(this.state.type);
        const stateValue = e.target[inputType];

        if(this.state[inputType] == stateValue)
            return;

        this.setState({
            [inputType]: stateValue
        });
    }

    _onMouseEnter(e) {
        this.props.mouseEnterCallback();
    }

    _onMouseLeave(e) {
        this.props.mouseLeaveCallback();
    }

    disabled(v){
        if(typeof v === 'undefined'){
            return this.state.disabled;
        } else {
            this.setState({disabled: v});
        }
    }

    required(v){
        if(typeof v === 'undefined'){
            return this.state.required;
        } else {
            this.setState({required: v});
        }
    }

    value(v){
        if(typeof this.state.value === 'undefined')
            throw new Error("Input type '" + this.state.type + "' doesn't support 'value'");

        if (typeof v === 'undefined'){
            return this.state.value;
        } else {
            this.setState({value: v});
        }
    }

    checked(v){
        if (typeof this.state.checked === 'undefined')
            throw new Error("Input type '" + this.state.type + "' doesn't support 'checked'");

        if (typeof v === 'undefined'){
            return this.state.checked;
        } else {
            this.setState({checked: v});
        }
    }

    type(){
        return this.state.type;
    }

    render(){
        let classes = (this.props.validate ? "validate " : "") + this.props.extraClass;
        let props = _.pick(this.props, this.getAttributes(this.state.type));
        return (
            <input {...props}
                   type={this.state.type}
                   disabled={this.state.disabled}
                   required={this.state.required}
                   onChange={this._onChange}
                   onMouseEnter={this._onMouseEnter}
                   onMouseLeave={this._onMouseLeave}
                   className={classes}/>
        );
    }
}

Input.displayName = "GenericInputElement";
Input.propTypes = {
    disabled:           React.PropTypes.bool,
    required:           React.PropTypes.bool,
    validate:           React.PropTypes.bool,
    value:              React.PropTypes.string,
    name:               React.PropTypes.string,
    placeholder:        React.PropTypes.string,
    id:                 React.PropTypes.string,
    type:               React.PropTypes.oneOf(_.keys(BaseInput.TYPES)),
    extraClass:         React.PropTypes.string,
    changeCallback:     React.PropTypes.func,
    mouseEnterCallback: React.PropTypes.func,
    mouseLeaveCallback: React.PropTypes.func
};
Input.defaultProps = {
    disabled:           false,
    required:           false,
    validate:           false,
    value:              '',
    name:               '',
    placeholder:        '',
    id:                 '',
    type:               'text',
    extraClass:         '',
    changeCallback:     function(){},
    mouseEnterCallback: function(){},
    mouseLeaveCallback: function(){}
};
