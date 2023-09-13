import React from 'react'
import Card from 'react-bootstrap/Card';

export default function MenuItem({ dish }) {
    return (
        <div>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={dish.image} />
                <Card.Body>
                    <Card.Title style={{ cursor: "pointer" }}>{dish.name}</Card.Title>
                    <Card.Text>
                        {dish.description}
                    </Card.Text>
                    <p><b> Price: {dish.price}$ </b> </p>
                    <p><b> Label: {dish.label} </b> </p>
                </Card.Body>
            </Card>
        </div>
    )
}
