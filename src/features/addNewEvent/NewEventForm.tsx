import React from 'react';
import { Modal } from '@mui/material';

interface NewEventFormProps{
    isOpen: boolean,
    onClose: ()=>void,
}

export const NewEventForm = (props: NewEventFormProps) => {
    const {isOpen, onClose} = props;
    return(
        <Modal open={isOpen} onClose={onClose}>
            <div>123</div>
        </Modal>
    )
}