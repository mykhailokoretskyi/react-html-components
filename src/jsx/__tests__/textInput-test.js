import React from 'react';
import TextInput from '../textInput.jsx';
import renderer from 'react/lib/ReactTestRenderer';

const textInputWithListeners = (
    <TextInput required={true}
           label="test label"
           name="test_input"
           id="test"
           changeCallback={function(){}}
           mouseEnterCallback={function(){}}
           mouseLeaveCallback={function(){}}/>
);

const textInputWithoutListeners = (
    <TextInput required={true}
           label="test label"
           name="test_input"
           id="test"
           type="text"/>
);

const textInputWithValue = (
    <TextInput label="test label"
           name="test_input"
           id="test"
           value="value"
           type="text"/>
);

describe('Input', () => {
    it('with listeners matches snapshot', () => {
        const component = renderer.create(textInputWithListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('without listeners matches snapshot', () => {
        const component = renderer.create(textInputWithoutListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('with value matches snapshot', () => {
        const component = renderer.create(textInputWithValue);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
