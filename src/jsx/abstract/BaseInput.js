'use strict';

import React from 'react';
import _ from 'lodash';

export default class BaseInput extends React.Component {
    constructor(props){
        super(props);
    }

    getAttributes(type){
        const inputType = this.getInputType(type);
        if (!inputType)
            return;

        return BaseInput.CONFIG.attributes[inputType].concat(BaseInput.CONFIG.attributes.common);
    }

    getStateAttributes(type) {
        const attributes = this.getAttributes(type);
        return _.intersection(attributes, BaseInput.STATE_ATTRIBUTES);
    }

    getInputType(type){
        for (const key in BaseInput.ATTRIBUTE_TYPES){
            if(BaseInput.ATTRIBUTE_TYPES[key].find(x => x == type))
                return key;
        }
    }
}

BaseInput.INPUT_TYPES = {
    value: "value",
    checked: "checked"
};

BaseInput.TYPES = {
    text:           BaseInput.INPUT_TYPES.value,
    email:          BaseInput.INPUT_TYPES.value,
    password:       BaseInput.INPUT_TYPES.value,
    radio:          BaseInput.INPUT_TYPES.checked,
    checkbox:       BaseInput.INPUT_TYPES.checked
};

BaseInput.ATTRIBUTE_TYPES = {
    [BaseInput.INPUT_TYPES.value]: [
        'text',
        'email',
        'password'
    ],
    [BaseInput.INPUT_TYPES.checked]: [
        'radio',
        'checkbox'
    ]
};

BaseInput.CONFIG = {
    attributes: {
        [BaseInput.INPUT_TYPES.value]: [
            "value",
            "placeholder"
        ],
        [BaseInput.INPUT_TYPES.checked]: [
            "checked"
        ],
        common: [
            "disabled",
            "id",
            "name",
            "required",
            "type"
        ]
    }
};

BaseInput.STATE_ATTRIBUTES = [
    "value",
    "checked",
    "disabled",
    "required",
    "type"
];
