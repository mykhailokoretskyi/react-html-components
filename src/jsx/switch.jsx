'use strict';

import React from 'react';
import BaseInputWrapper from "./baseInputWrapper";
import Input from './input';


export default class Switch extends BaseInputWrapper{
    constructor(props){
        super(props)
    }

    render(){
        let on = this.props.onLabel;
        let off = this.props.offLabel;

        return (
            <div className="switch">
                <label>
                    {off}
                    <Input {...this.props} type="checkbox" ref="input"/>
                    <span className="lever"/>
                    {on}
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
