import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAtom } from 'jotai';
import { columnsAtom } from '../../atoms/columnsAtom';
import { modalAtom } from '../../atoms/modalAtom';
import './index.css';

const NewCardModal: React.FC<any> = () => {
    const [description, setDescription] = useState('');
    const [modal, setModal] = useAtom(modalAtom);
    const [columns, setColumns] = useAtom(columnsAtom);

    const handleCancel = () => {
        setDescription('');
        setModal(false);
    };

    const handleSave = () => {
        setDescription('');

        const newColumns = [...columns];
        const newCard = { id: Math.random().toString(), description: description };
        newColumns[0].cards.push(newCard);
        setColumns(newColumns);

        setModal(false);
    };

    return (
        <Modal show={modal} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Add a new card</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    className="modal-textarea"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewCardModal;