import React from "react";
import {Card, Col} from "react-bootstrap";
import CardItem from "../Card";

const Column: React.FC<ColumnProps> = ({ title, cards }) => (
    <Col>
        <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                {cards.map((card) => (
                    <CardItem key={card.id} id={card.id} description={card.description} />
                ))}
            </Card.Body>
        </Card>
    </Col>
);

export default Column;
