import React from 'react';
import InvalidInputWrapper from '../__mocks__/invalidInputWrapper.jsx';
import ValidInputWrapper from '../__mocks__/validInputWrapper.jsx';
import TestUtils from 'react-addons-test-utils';

describe('BaseInputWrapper', () => {

    var valid;

    beforeEach(function(){
        valid = TestUtils.renderIntoDocument(
            <ValidInputWrapper value="init"
                               disabled={false}
                               required={true} />
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
    it("has accessor for `required`", () => {
        expect(valid.required()).toBe(true);
        valid.required(false);
        expect(valid.required()).toBe(false);
    });

    it("has accessor for `disabled`", () => {
        expect(valid.disabled()).toBe(false);
        valid.disabled(true);
        expect(valid.disabled()).toBe(true);
    });

    it("has accessor for `type` attribute", () => {
        expect(valid.type()).toBe("text");
    });
});
