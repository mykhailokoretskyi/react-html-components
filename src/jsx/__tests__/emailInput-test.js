jest.mock('react/lib/ReactDefaultInjection');
import React from 'react';
import EmailInput from '../emailInput.jsx';
import renderer from 'react/lib/ReactTestRenderer';

const emailInputWithListeners = (
    <EmailInput required={true}
               label="test label"
               name="test_input"
               id="test"
               changeCallback={function(){}}
               mouseEnterCallback={function(){}}
               mouseLeaveCallback={function(){}}/>
);

const emailInputWithoutListeners = (
    <EmailInput required={true}
               label="test label"
               name="test_input"
               id="test"/>
);

const emailInputWithValue = (
    <EmailInput label="test label"
               name="test_input"
               id="test"
                validate={true}
                errorMessage="wrong"
                successMessage="correct"
               value="value"
               type="text"/>
);

describe('Input', () => {
    it('with listeners matches snapshot', () => {
        const component = renderer.create(emailInputWithListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('without listeners matches snapshot', () => {
        const component = renderer.create(emailInputWithoutListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('with value matches snapshot', () => {
        const component = renderer.create(emailInputWithValue);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
