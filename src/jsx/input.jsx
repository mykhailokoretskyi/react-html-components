'use strict';

import React from 'react';

const TYPES = [
    'text'
];

export default class Input extends React.Component {
    constructor(props) {
        let state = {};
        state.value = props.value;

        super(...props);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this._onChange     = this._onChange.bind(this);

        this.state = state;
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.value != prevState.value){
            this.props.changeCallback();
        }
    }

    _onChange(e) {
        let value = e.target.value;
        if (value == this.state.value)
            return;

        this.setState({
            value: value
        });
    }

    _onMouseEnter(e) {
        this.props.mouseEnterCallback();
    }

    _onMouseLeave(e) {
        this.props.mouseLeaveCallback();
    }

    render(){
        let classes = "validate " + this.props.extraClass;
        return (
            <div className="input-field col s12">
                <input placeholder={this.props.placeholder}
                       id={this.props.id}
                       type={this.props.type}
                       name={this.props.name}
                       onChange={this._onChange}
                       onMouseEnter={this._onMouseEnter}
                       onMouseLeave={this._onMouseLeave}
                       className={classes}/>
                    <label htmlFor={this.props.id} dangerouslySetInnerHTML={{__html: this.props.label}} />
            </div>
        );
    }
}

Input.displayName = "GenericInputElement";
Input.propTypes = {
    required:           React.PropTypes.bool,
    value:              React.PropTypes.string,
    name:               React.PropTypes.string,
    label:              React.PropTypes.string,
    placeholder:        React.PropTypes.string,
    id:                 React.PropTypes.string,
    type:               React.PropTypes.oneOf(TYPES),
    extraClass:         React.PropTypes.string,
    changeCallback:     React.PropTypes.func,
    mouseEnterCallback: React.PropTypes.func,
    mouseLeaveCallback: React.PropTypes.func
};
Input.defaultProps = {
    required:           false,
    value:              '',
    name:               '',
    label:              '',
    placeholder:        '',
    id:                 '',
    type:               'text',
    extraClass:         '',
    changeCallback:     function(){},
    mouseEnterCallback: function(){},
    mouseLeaveCallback: function(){}
};
