import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSetAtom, useAtomValue } from 'jotai';
import Column from '../Column';
import NewCardModal from '../Modal';
import { columnsAtom } from '../../atoms/columnsAtom';
import { modalAtom } from '../../atoms/modalAtom';

const KanbanBoard: React.FC = () => {
    const columns = useAtomValue(columnsAtom);
    const setModal = useSetAtom(modalAtom);

    const handleNewCard = () => {
        setModal(true);
    };

    return (
        <Container>
            <Row className="justify-content-end mb-3">
                <Col className="d-flex justify-content-end mb-3 mx-auto">
                    <Button variant="primary mt-5" onClick={handleNewCard}>
                        Add new card
                    </Button>
                </Col>
            </Row>
            <Row>
                {columns.map((column, index) => (
                    <Column key={index} {...column} />
                ))}
            </Row>
            <NewCardModal />
        </Container>
    );
};


export default KanbanBoard;
