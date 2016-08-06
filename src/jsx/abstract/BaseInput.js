'use strict';

import React from 'react';
import _ from 'lodash';

export default class BaseInput extends React.Component {
    constructor(props){
        super(props);
    }
}

BaseInput.TYPES = [
    'text',
    'email',
    'password',
    'radio',
    'checkbox'
];
