jest.mock('react/lib/ReactDefaultInjection');
import React from 'react';
import InputBox from '../inputBox.jsx';
import renderer from 'react/lib/ReactTestRenderer';

const textInputWithListeners = (
    <InputBox required={true}
           label="test label"
           name="test_input"
           id="test"
           placeholder="Input"
           type="text"
           extraClass="anotherClass"
           validate={true}
           errorMessage="wrong"
           successMessage="correct"
           changeCallback={function(){}}
           mouseEnterCallback={function(){}}
           mouseLeaveCallback={function(){}}/>
);

const textInputWithoutListeners = (
    <InputBox required={true}
           label="test label"
           name="test_input"
           id="test"
           type="text"/>
);

const textInputWithValue = (
    <InputBox label="test label"
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
