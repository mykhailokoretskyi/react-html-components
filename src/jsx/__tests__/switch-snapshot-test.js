import React from 'react';
import Switch from '../switch';
import renderer from 'react/lib/ReactTestRenderer';

const switchWithListeners = (
    <Switch required={true}
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

const switchWithoutListeners = (
    <Switch required={true}
                 label="test label"
                 name="test_input"
                 checked={true}
                 id="test"/>
);

const switchWithValue = (
    <Switch label="test label"
                 name="test_input"
                 id="test"
                 checked={false}
                 value="value"/>
);

describe('Switch', () => {
    it('with listeners matches snapshot', () => {
        const component = renderer.create(switchWithListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('without listeners matches snapshot', () => {
        const component = renderer.create(switchWithoutListeners);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('with value matches snapshot', () => {
        const component = renderer.create(switchWithValue);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
