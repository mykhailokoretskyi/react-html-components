'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component {
    constructor(props){
        super(props);
    }

    close(){
        const element = ReactDOM.findDOMNode(this);
        window.$(element).closeModal();
    }

    open(){
        const element = ReactDOM.findDOMNode(this);
        window.$(element).openModal();
    }

    render(){

        const modalClass = ['modal', this.props.type].join(' ');

        return (
            <div className={modalClass}>
                { this.props.children }
            </div>
        );
    }
}

Modal.types = [
    '',
    'modal-fixed-footer',
    'bottom-sheet'
];

Modal.propTypes = {
    type:           React.PropTypes.oneOf(Modal.types)
};

Modal.defaultProps = {
    type:           ''
};
