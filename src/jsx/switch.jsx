'use strict';

import React from 'react';
import BaseInputWrapper from "./baseInputWrapper";
import Input from './input';


export default class Switch extends BaseInputWrapper{
    constructor(props){
        super(props)
    }

    render(){
        const { label, onLabel, offLabel, ...other } = this.props;
        other.placeholder = '';

        return (
            <div className="switch">
                <label>
                    {offLabel}
                    <Input {...other} type="checkbox" ref="input"/>
                    <span className="lever"/>
                    {onLabel}
                </label>
            </div>
        );
    }
}

Switch.propTypes = {
    offLabel:           React.PropTypes.string,
    onLabel:            React.PropTypes.string
};

Switch.defaultProps = {
    offLabel:           'Off',
    onLabel:            'On'
};
