import React, { memo } from "react";
import { Button, Card } from "react-bootstrap";
import { useAtom } from 'jotai';
import { columnsAtom } from '../../atoms/columnsAtom';

const CardItem: React.FC<CardItemProps> = ({ id, description }) => {
    const [columns, setColumns] = useAtom(columnsAtom);

    const moveCard = (setNextColumn: boolean) => {
        const newColumns = [...columns];
        const columnId = columns.findIndex(column => column.cards.some(card => card.id === id));
        const newColumnId = setNextColumn ? columnId + 1 : columnId - 1;

        if (newColumns[newColumnId] === undefined) {
            return;
        }

        // Remove the card from the old column
        newColumns[columnId] = {
            ...columns[columnId],
            cards: columns[columnId].cards.filter(card => card.id !== id)
        };

        // Add the card to the new column
        const cardToMove = columns[columnId].cards.filter(card => card.id === id);
        newColumns[newColumnId] = {
            ...columns[newColumnId],
            cards: [...columns[newColumnId].cards, ...cardToMove]
        };

        setColumns(newColumns);
    };

    const handleForwardButton = () => {
        moveCard(true);
    };

    const handleBackButton = () => {
        moveCard(false);
    };

    return (
        <Card key={id} className="mb-2">
            <Card.Body>{description}</Card.Body>
            <Card.Footer className="d-flex">
                <Button onClick={handleBackButton} className="m-2">&lt;</Button>
                <Button onClick={handleForwardButton} className="m-2 ms-auto">&gt;</Button>
            </Card.Footer>
        </Card>
    );
};

export default memo(CardItem);
