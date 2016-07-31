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
                   label="test label"
                   name="test_input"
                   id="test"
                   type="text"
                   changeCallback={change}
                   mouseEnterCallback={enter}
                   mouseLeaveCallback={leave}/>
        );
    });

    it('triggers change callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.change(element, {target:{value:"Value"}});
        expect(change).toBeCalled();
    });
    it('doesnt trigger change callback', () => {
        let element = TestUtils.findRenderedDOMComponentWithTag(input, 'input');
        TestUtils.Simulate.change(element, {target:{value:""}});
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
});
