import React from 'react';
import Input from '../input.jsx';
import TestUtils from 'react-addons-test-utils';

describe('Input', () => {

    var input, change, enter, leave;

    beforeEach(function(){
        change = jest.genMockFn();
        enter = jest.genMockFn();
        leave = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <Input required={true}
                   disabled={false}
                   label="test label"
                   name="test_input"
                   value="initial value"
                   id="test"
                   type="text"
                   changeCallback={change}
                   mouseEnterCallback={enter}
                   mouseLeaveCallback={leave}/>
        );
    });

    it('doesnt trigger change callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.change(element, {target:{value:"initial value"}});
        expect(change).not.toBeCalled();
    });
    it('triggers mouse enter callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.mouseEnter(element);
        expect(enter).toBeCalled();
    });
    it('triggers mouse leave callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.mouseLeave(element);
        expect(leave).toBeCalled();
    });
    it('triggers change callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.change(element, {target:{value:"Value"}});
        expect(change).toBeCalled();
    });
    it("has accessor for value", () => {
        expect(input.value()).toBe("initial value");
    });
    it("triggers change on value change", () => {
        input.value("another value");
        expect(change).toBeCalled();
        expect(input.value()).toBe("another value");
    });

    it("has accessor for `required`", () => {
        expect(input.required()).toBe(true);
        input.required(false);
        expect(input.required()).toBe(false);
    });

    it("has accessor for `disabled`", () => {
        expect(input.disabled()).toBe(false);
        input.disabled(true);
        expect(input.disabled()).toBe(true);
    });
});
