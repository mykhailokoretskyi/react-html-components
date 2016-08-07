jest.mock('react/lib/ReactDefaultInjection');
import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import TinyIcon from '../tinyIcon';
import SmallIcon from '../smallIcon';
import LargeIcon from '../largeIcon';
import MediumIcon from '../mediumIcon';

describe('Icon', () => {
    it('tiny icon snapshot', () => {
        const component = renderer.create(<TinyIcon iconName={"test_icon"} />);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('small icon snapshot', () => {
        const component = renderer.create(<SmallIcon classes={["some test classes"]} iconName={"test_icon"} />);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('medium icon snapshot', () => {
        const component = renderer.create(<MediumIcon classes={["some test classes"]} iconName={"test_icon"} />);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('large icon matches snapshot', () => {
        const component = renderer.create(<LargeIcon classes={["some test classes"]} iconName={"test_icon"} />);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
