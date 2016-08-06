'use strict';

import React from 'react';
import _ from 'lodash';
import BaseInput from './abstract/BaseInput';

export default class Input extends BaseInput {
    constructor(props) {
        super(props);

        this.state = _.pick(props, [
            "value",
            "checked",
            "type",
            "disabled",
            "required"
        ]);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this._onChange     = this._onChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if ((typeof this.state.value != 'undefined' && this.state.value != prevState.value) ||
            (typeof this.state.checked != 'undefined' && this.state.checked != prevState.checked)){
            this.props.changeCallback();
        }
    }

    _onChange(e) {
        const value = e.target.value;
        const checked = e.target.checked;

        if(this.state.checked != checked || this.state.value != value) {
            this.setState({
                value: value,
                checked: checked
            });
        }
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
        if (typeof v === 'undefined'){
            return this.state.value;
        } else {
            this.setState({value: v});
        }
    }

    checked(v){
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
        const {
            validate,
            extraClass,
            type,
            disabled,
            required,
            value,
            checked,
            mouseEnterCallback,
            mouseLeaveCallback,
            changeCallback,
            label,
            errorMessage,
            successMessage,
            withGap,
            offLabel,
            onLabel,
            blurCallback,
            focusCallback,
            ...other
            } = this.props;
        let classes = (validate ? "validate " : "") + extraClass;

        return (
            <input {...other}
                   type={this.state.type}
                   disabled={this.state.disabled}
                   required={this.state.required}
                   checked={this.state.checked}
                   value={this.state.value}
                   onChange={this._onChange}
                   onClick={this._onChange}
                   onMouseEnter={this._onMouseEnter}
                   onMouseLeave={this._onMouseLeave}
                   onBlur={blurCallback}
                   onFocus={focusCallback}
                   className={classes}/>
        );
    }
}

Input.displayName = "GenericInputElement";
Input.propTypes = {
    checked:            React.PropTypes.bool,
    disabled:           React.PropTypes.bool,
    required:           React.PropTypes.bool,
    validate:           React.PropTypes.bool,
    value:              React.PropTypes.string,
    name:               React.PropTypes.string,
    placeholder:        React.PropTypes.string,
    id:                 React.PropTypes.string,
    type:               React.PropTypes.oneOf(BaseInput.TYPES),
    extraClass:         React.PropTypes.string,
    changeCallback:     React.PropTypes.func,
    mouseEnterCallback: React.PropTypes.func,
    mouseLeaveCallback: React.PropTypes.func,
    blurCallback:       React.PropTypes.func,
    focusCallback:      React.PropTypes.func
};
Input.defaultProps = {
    checked:            false,
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
    mouseLeaveCallback: function(){},
    blurCallback:       function(){},
    focusCallback:      function(){}
};
