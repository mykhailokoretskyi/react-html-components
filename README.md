# react-html-components
## Generic html react components for materializecss
<br />
[![Build
Status](https://travis-ci.org/mykhailokoretskyi/react-html-components.svg?branch=master)](https://travis-ci.org/react-html-components/react-html-components) [![npm
version](http://img.shields.io/npm/v/react-html-components.svg?style=flat)](https://npmjs.org/package/react-html-components "View this project on npm")

### Getting started

#### Install npm package
`npm install --save react-html-components`

This package requires [materializecss](http://materializecss.com/, "Materialize css framework").

#### Usage
`import {TextInput, Switch} from 'react-html-components';`

### Currently supported materialize elements:

1. Form elements
  1. input type text (**TextInput**)
  2. input type email (**EmailInput**)
  3. input type password (**PasswordInput**)
  4. input type radio (**RadioButton**)
  5. input type checkbox (**Checkbox**)
  6. switch (**Switch**)

## Documentation

### Form elements

#### Common attributes
* `name`               - type `string`;
* `disabled`           - type `boolean`;
* `id`                 - type `string`;
* `required`           - type `boolean`;
* `changeCallback`     - type `function` (executed when input changes value/checked);
* `mouseEnterCallback` - type `function` (executed on hover of `<input/>`);
* `mouseLeaveCallback` - type `function` (executed on mouse leave the `<input/>`);

* `value`              - type `string`;
* `validate`           - type `boolean` (enables materialize`s validation);
* `errorMessage`       - type `string` (`data-error` attribute of `<input/>`);
* `successMessage`     - type `string` (`data-success` attribute of `<input/>`);


#### Methods

Following accessor methods are available through the React\`s `refs`:
* `value`              - getter/setter (available for all inputs **EXCEPT *RadioButton*, *Checkbox*, *Switch***);
* `checked`            - getter/setter (available **ONLY** for *RadioButton*, *Checkbox*, *Switch*; throws an exception if called for other inputs);
* `disabled`           - getter/setter (available for all inputs);
* `required`           - getter/setter (available for all inputs);
* `type`               - getter (available for all inputs);

*Example*:
```
someMethod(){
  this.refs.textInput.value("new value"); // setter
  this.refs.textInput.value()             // getter
}
.......
render(){
  return (
    <TextInput ref="textInput" value={this.state.value} />
);
```

* * * * * * * *

#### TextInput (`type="text"`)

Supports *common* attributes.

##### Attributes
* `value`              - type `string`;
* `placeholder`        - type `string`;
* `label`              - type `string` (injected with `dangerouslySetInnerHTML`);

* * * * * * * *

#### PasswordInput (`type="password"`)

Supports *common* attributes.

##### Attributes
* `value`              - type `string`;
* `placeholder`        - type `string`;
* `label`              - type `string` (injected with `dangerouslySetInnerHTML`);

* * * * * * * *

#### EmailInput (`type="email"`)

Supports *common* attributes.

##### Attributes
* `value`              - type `string`;
* `placeholder`        - type `string`;
* `label`              - type `string` (injected with `dangerouslySetInnerHTML`);
* `validate`           - type `bool` (reference [materializecss](http://materializecss.com/, "Materialize css framework") documentation);
* `errorMessage`       - type `string` (reference [materializecss](http://materializecss.com/, "Materialize css framework") documentation);
* `successMessage`     - type `string` (reference [materializecss](http://materializecss.com/, "Materialize css framework") documentation);

* * * * * * * *
