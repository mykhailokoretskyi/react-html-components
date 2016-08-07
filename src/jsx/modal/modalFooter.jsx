'use strict';

import React, { Component } from 'react';

export default class ModalFooter extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="modal-footer">
                { this.props.children }
            </div>
        );
    }
}
