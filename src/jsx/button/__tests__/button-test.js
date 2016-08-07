import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Button from '../button';

describe('Input', () => {

    var click, button;

    beforeEach(function(){
        click = jest.genMockFn();

        button = TestUtils.renderIntoDocument(<Button clickCallback={click}>test</Button>);
    });

    it('triggers click callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(button, 'a');
        TestUtils.Simulate.click(element, {});
        expect(click).toBeCalled();
    });

    it("has accessor for `disabled`", () => {
        expect(button.disabled()).toBe(false);
        button.disabled(true);
        expect(button.disabled()).toBe(true);
    });

    it("doesn`t trigger click on disabled buttons", () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(button, 'a');
        button.disabled(true);
        TestUtils.Simulate.click(element, {});
        expect(click).not.toBeCalled();
    });
});
