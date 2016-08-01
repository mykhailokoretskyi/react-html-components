# react-html-components
## Generic html react components for materializecss
<br />
[![Build
Status](https://travis-ci.org/mykhailokoretskyi/react-html-components.svg?branch=master)](https://travis-ci.org/react-html-components/react-html-components) [![npm
version](http://img.shields.io/npm/v/react-html-components.svg?style=flat)](https://npmjs.org/package/react-html-components "View this project on npm")

### Getting started

#### Install npm package
`npm install --save react-html-components`

#### Usage
`import {TextInput, Switch} from 'react-html-components';`

### Supported materialize elements

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
* `value`              - type `string`;
* `id`                 - type `string`;
* `disabled`           - type `boolean`;
* `required`           - type `boolean`;
* `validate`           - type `boolean` (enables materialize`s validation);
* `errorMessage`       - type `string` (`data-error` attribute of `<input/>`);
* `successMessage`     - type `string` (`data-success` attribute of `<input/>`);
* `changeCallback`     - type `function` (executed when input changes value/checked);
* `mouseEnterCallback` - type `function` (executed on hover of `<input/>`);
* `mouseLeaveCallback` - type `function` (executed on mouse leave the `<input/>`)

#### Methods

Following accessor methods are available through the React\`s `refs`:
* `value`              - getter/setter (available for all inputs);
* `checked`            - getter/setter (available **ONLY** for *RadioButton*, *Checkbox*, *Switch*; throws an exception if called for other inputs);

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
