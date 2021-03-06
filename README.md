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
2. Icons
  1. Icon
  2. TinyIcon
  3. SmallIcon
  4. MediumIcon
  5. LargeIcon
2. Buttons
  1. Button
  2. LargeButton
  3. FlatButton
  4. FloatingButton
3. Modal

* * * * * * * *

## Documentation

### Form elements

#### Common attributes
* `value`              - type `string`;
* `checked`            - type `boolean`;
* `name`               - type `string`;
* `disabled`           - type `boolean`;
* `id`                 - type `string`;
* `required`           - type `boolean`;
* `extraClass`         - type `string` (is added to `class` attribute of `<input/>`);
* `label`              - type `string` (injected with `dangerouslySetInnerHTML`);
* `changeCallback`     - type `function` (executed when input changes value/checked);
* `mouseEnterCallback` - type `function` (executed on hover of `<input/>`);
* `mouseLeaveCallback` - type `function` (executed on mouse leave the `<input/>`);

#### Methods

Following accessor methods are available through the React\`s `refs`:
* `value`              - getter/setter;
* `checked`            - getter/setter;
* `disabled`           - getter/setter;
* `required`           - getter/setter;
* `type`               - getter;

*Example*:
```
someMethod(){
  this.refs.textInput.value("new value"); // setter
  this.refs.textInput.value()             // getter
}
.......
render(){
  return (
    <TextInput ref="textInput" value="initial value" />
);
```

* * * * * * * *

#### TextInput (`type="text"`)

Supports *common* attributes.

##### Attributes
* `placeholder`        - type `string`;

* * * * * * * *

#### PasswordInput (`type="password"`)

Supports *common* attributes.

##### Attributes
* `placeholder`        - type `string`;

* * * * * * * *

#### EmailInput (`type="email"`)

Supports *common* attributes.

##### Attributes
* `placeholder`        - type `string`;
* `validate`           - type `bool` (reference [materializecss](http://materializecss.com/, "Materialize css framework") documentation);
* `errorMessage`       - type `string` (`data-error` attribute of `<input/>`);
* `successMessage`     - type `string` (`data-success` attribute of `<input/>`);

* * * * * * * *

#### Checkbox (`type="checkbox"`)

Supports *common* attributes.

* * * * * * * *

#### RadioButton (`type="radio"`)

Supports *common* attributes.

##### Attributes
* `withGap`            - type `bool` (reference [materializecss](http://materializecss.com/, "Materialize css framework") documentation);

* * * * * * * *

### Icons

#### Icon - base icon component
#### Attributes
* `classes`            - type `Array` of css classes which will be concatenated with space;
* `iconName`           - type `string` - reference to materializecss docs;
* `size`               - type `string` (one of ["","tiny","small","medium","large"]);

#### TinyIcon (type={"tiny"})
#### SmallIcon (type={"small"})
#### MediumIcon (type={"medium"})
#### LargeIcon (type={"large"})

*Example*:
```
import { SmallIcon } from 'react-html-components';

.......

render(){
  return (
    <SmallIcon classes={["left"]} iconName={"cloud"} />
);

```

* * * * * * * *

### Buttons

#### Button
`Button` - is a base component for buttons.

#### Methods (available through `refs`)
* `disabled`           - setter/getter;

#### Attributes
* `classes`            - type `Array` of css classes which will be concatenated with space;
* `clickCallback`      - type `func` - will be triggered on click (is not triggered on disabled buttons);
* `disabled`           - type `bool`;
* `type`               - type oneOf(["", "btn-large", "btn-flat", "btn-floating"]) - should not be used normaly;


#### LargeButton (Button type={"btn-large"})
#### FlatButton (Button type={"btn-flat"})
#### FloatingButton (Button type={"btn-floating"})

*Example*:
```
import { LargeButton } from 'react-html-components';

.......

render(){
  return (
    <LargeButton disabled={true}>Test Button</LargeButton>
);

```

* * * * * * * *

### Modal

#### Attributes
* `type`               - type `string` (default modal, if empty; `bottom-sheet`, `modal-fixed-footer`);

#### Methods (available through `refs`)
* `open`               - open modal;
* `close`              - close modal;

*Example*:
```
import { Modal, ModalContent, ModalFooter, FlatButton } from 'react-html-components';

render(){
  return (
    <Modal ref="modal" type="bottom-sheet">
      <ModelContent>
        Content
      </ModalContent>
      <ModalFooter>
        <FlatButton classes={["modal-action modal-close waves-effect waves-green"]}>Agree</FlatButton>
      </ModelFooter>
    </Modal>
);

openModal(){
  this.refs.modal.open();
}

closeModal(){
  this.refs.modal.close();
}

```

* * * * * * * *
