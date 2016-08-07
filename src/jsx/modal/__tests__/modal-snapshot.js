jest.mock('react/lib/ReactDefaultInjection');
import React from 'react';
import Modal from '../modal';
import ModalContent from '../modalContent';
import ModalFooter from '../modalFooter';
import renderer from 'react/lib/ReactTestRenderer';

const defaultModal = (
    <Modal>
        <ModalContent>
            This is a default modal
        </ModalContent>
        <ModalFooter>
            With footer
        </ModalFooter>
    </Modal>
);

const fixedFooterModal = (
    <Modal type="modal-fixed-footer">
        <ModalContent>
            This is a modal
        </ModalContent>
        <ModalFooter>
            With fixed footer
        </ModalFooter>
    </Modal>
);

const bottomSheetModal = (
    <Modal type="bottom-sheet">
        <ModalContent>
            This is a bottom sheet modal
        </ModalContent>
        <ModalFooter>
            With footer
        </ModalFooter>
    </Modal>
);

describe('Modal', () => {
    it('default matches snapshot', () => {
        const component = renderer.create(defaultModal);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('fixed footer matches snapshot', () => {
        const component = renderer.create(fixedFooterModal);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('bottom sheet matches snapshot', () => {
        const component = renderer.create(bottomSheetModal);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
