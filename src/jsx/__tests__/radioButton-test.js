import React from 'react';
import RadioButton from '../radioButton.jsx';
import TestUtils from 'react-addons-test-utils';

describe('RadioButton', () => {

    var input, change, enter, leave;

    beforeEach(function(){
        change = jest.genMockFn();
        enter = jest.genMockFn();
        leave = jest.genMockFn();

        input = TestUtils.renderIntoDocument(
            <RadioButton required={true}
                   label="test label"
                   name="test_input"
                   value="initial value"
                         checked={true}
                   id="test"
                   changeCallback={change}
                   mouseEnterCallback={enter}
                   mouseLeaveCallback={leave}/>
        );
    });

    it('doesnt trigger change callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.change(element, {target:{checked:true}});
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
        TestUtils.Simulate.change(element, {target:{checked:false}});
        expect(change).toBeCalled();
    });
    it("has accessor for checked", () => {
        expect(input.checked()).toBe(true);
    });
    it("triggers change on state change", () => {
        input.checked(false);
        expect(change).toBeCalled();
        expect(input.checked()).toBe(false);
    })
});
