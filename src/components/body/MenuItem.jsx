import React from 'react'
import Card from 'react-bootstrap/Card';

export default function MenuItem(props) {
    return (
        <div>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={props.dish.image} />
                <Card.Body>
                    <Card.Title style={{ cursor: "pointer" }}
                        onClick={() => props.DishSelect(props.dish)}
                    >{props.dish.name}</Card.Title>
                    <Card.Text>
                        {props.dish.description}
                    </Card.Text>
                    <p><b> Price: {props.dish.price}$ </b> </p>
                    <p><b> Label: {props.dish.label} </b> </p>
                </Card.Body>
            </Card>
        </div>
    )
}
