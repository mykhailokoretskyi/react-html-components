import React from 'react';
import InvalidInputWrapper from '../__mocks__/invalidInputWrapper.jsx';
import ValidInputWrapper from '../__mocks__/validInputWrapper.jsx';
import TestUtils from 'react-addons-test-utils';

describe('BaseInputWrapper', () => {

    var valid;

    beforeEach(function(){
        valid = TestUtils.renderIntoDocument(
            <ValidInputWrapper value="init"/>
        );

    });

    it('triggers exception if there is no reference to input', () => {
        expect(function(){TestUtils.renderIntoDocument(<InvalidInputWrapper />);}).toThrow();
    });
    it('doesnt trigger exception if there is reference to input', () => {
        expect(function(){TestUtils.renderIntoDocument(<ValidInputWrapper />);}).not.toThrow();
    });
    it("has accessor to value of an input", () => {
        expect(valid.value()).toBe("init");
    });
});
