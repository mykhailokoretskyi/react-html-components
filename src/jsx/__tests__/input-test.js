import React from 'react';
import Input from '../input.jsx';
import renderer from 'react/lib/ReactTestRenderer';

describe('Input', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
            <Input page="http://www.facebook.com"/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // manually trigger the callback
        tree.props.onMouseEnter();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // manually trigger the callback
        tree.props.onMouseLeave();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
