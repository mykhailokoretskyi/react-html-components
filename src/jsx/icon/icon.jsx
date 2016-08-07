'use strict';

import React from 'react';

export default class Icon extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const classes = this.props.classes;
        classes.push("material-icons", this.props.size);
        const className = classes.join(" ");

        return (
            <i className={className} dangerouslySetInnerHTML={{__html: this.props.iconName}} />
        );
    }
}

Icon.sizes = [
    "",
    "tiny",
    "small",
    "medium",
    "large"
];

Icon.propTypes = {
    size:           React.PropTypes.oneOf(Icon.sizes),
    iconName:       React.PropTypes.string,
    classes:        React.PropTypes.array
};

Icon.defaultProps = {
    size:           'small',
    iconName:       '',
    classes:        []
};
