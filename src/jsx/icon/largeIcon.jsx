'use strict';

import React from 'react';
import Icon from './icon';

export default class LargeIcon extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { size, ...other } = this.props;
        return (
            <Icon {...other} size={"large"} />
        );
    }
}
