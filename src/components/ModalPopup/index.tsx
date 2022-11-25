import React from 'react';
import './ModalPopup.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: any
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

    return isOpen ? (
        <div className={'modal'}>
            <div
                className={'modal__overlay'}
                onClick={() => onClose()}
            />
            <div className={'modal__box'}>
                <div className={'modal__content'}>
                    { children }
                </div>
            </div>
        </div>
    ) : null;
};