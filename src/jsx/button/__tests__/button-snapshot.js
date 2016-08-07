jest.mock('react/lib/ReactDefaultInjection');
import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';
import FloatingButton from '../floatingButton';
import FlatButton from '../flatButton';
import LargeButton from '../largeButton';

import button from '../__mocks__/button';
import buttonWithClasses from '../__mocks__/buttonWithClasses';
import buttonDisabled from '../__mocks__/buttonDisabled';

describe('Button', () => {
    it('regular button snapshot', () => {
        const component = renderer.create(button);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('regular with classes', () => {
        const component = renderer.create(buttonWithClasses);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('regular disabled', () => {
        const component = renderer.create(buttonDisabled);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('large matches snapshot', () => {
        const component = renderer.create(<LargeButton classes={["some", "classes"]}>Large</LargeButton>);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('flat matches snapshot', () => {
        const component = renderer.create(<FlatButton classes={["some", "classes"]}>Flat</FlatButton>);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('floating matches snapshot', () => {
        const component = renderer.create(<FloatingButton classes={["some", "classes"]}>Floating</FloatingButton>);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
