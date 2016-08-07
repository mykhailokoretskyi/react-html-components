'use strict';

import React, { Component } from 'react';

export default class ModalContent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="modal-content">
                { this.props.children }
            </div>
        );
    }
}
