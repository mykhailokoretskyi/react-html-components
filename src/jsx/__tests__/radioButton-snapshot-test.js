import React from 'react';
import RadioButton from '../radioButton.jsx';
import renderer from 'react/lib/ReactTestRenderer';

const radioButtonWithListeners = (
    <RadioButton required={true}
           label="test label"
           name="test_input"
           id="test"
           placeholder="RadioButton"
           extraClass="anotherClass"
           validate={true}
           errorMessage="wrong"
           successMessage="correct"
           changeCallback={function(){}}
           mouseEnterCallback={function(){}}
           mouseLeaveCallback={function(){}}/>
);

const radioButtonWithoutListeners = (
    <RadioButton required={true}
                 label="test label"
                 name="test_input"
                 checked={true}
                 id="test"/>
);

const radioButtonWithValue = (
    <RadioButton label="test label"
           name="test_input"
           id="test"
                 withGap={true}
                 checked={false}
           value="value"/>
);

describe('RadioButton', () => {
    it('with listeners matches snapshot', () => {
        const component = renderer.create(radioButtonWithListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('without listeners matches snapshot', () => {
        const component = renderer.create(radioButtonWithoutListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('with value matches snapshot', () => {
        const component = renderer.create(radioButtonWithValue);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
