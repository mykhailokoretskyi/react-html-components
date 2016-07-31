import React from 'react';
import Checkbox from '../checkbox';
import renderer from 'react/lib/ReactTestRenderer';

const checkboxWithListeners = (
    <Checkbox required={true}
                 label="test label"
                 name="test_input"
                 id="test"
                 placeholder="Checkbox"
                 extraClass="anotherClass"
                 validate={true}
                 errorMessage="wrong"
                 successMessage="correct"
                 changeCallback={function(){}}
                 mouseEnterCallback={function(){}}
                 mouseLeaveCallback={function(){}}/>
);

const checkboxWithoutListeners = (
    <Checkbox required={true}
                 label="test label"
                 name="test_input"
                 checked={true}
              filledIn={true}
                 id="test"/>
);

const checkboxWithValue = (
    <Checkbox label="test label"
                 name="test_input"
                 id="test"
                 checked={false}
                 value="value"/>
);

describe('Checkbox', () => {
    it('with listeners matches snapshot', () => {
        const component = renderer.create(checkboxWithListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('without listeners matches snapshot', () => {
        const component = renderer.create(checkboxWithoutListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('with value matches snapshot', () => {
        const component = renderer.create(checkboxWithValue);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
