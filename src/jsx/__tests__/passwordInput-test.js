import React from 'react';
import PasswordInput from '../passwordInput.jsx';
import renderer from 'react/lib/ReactTestRenderer';

const PasswordInputWithListeners = (
    <PasswordInput required={true}
                    label="test label"
                    name="test_input"
                    validate={true}
                    errorMessage="wrong"
                    successMessage="correct"
                    id="test"
                    changeCallback={function(){}}
                    mouseEnterCallback={function(){}}
                    mouseLeaveCallback={function(){}}/>
);

const PasswordInputWithoutListeners = (
    <PasswordInput required={true}
                label="test label"
                name="test_input"
                id="test"/>
);

const PasswordInputWithValue = (
    <PasswordInput label="test label"
                name="test_input"
                id="test"
                value="value"
                type="text"/>
);

describe('PasswordInput', () => {
    it('with listeners matches snapshot', () => {
        const component = renderer.create(PasswordInputWithListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('without listeners matches snapshot', () => {
        const component = renderer.create(PasswordInputWithoutListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('with value matches snapshot', () => {
        const component = renderer.create(PasswordInputWithValue);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
