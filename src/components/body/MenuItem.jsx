import React, { Fragment } from 'react'
import { Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function MenuItem(props) {
    return (
        <div>
            <Fragment>
                <Container>
                    <Col>
                        <Card style={{ minWidth: '18rem', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={props.dish.image}
                                style={{ cursor: "pointer", width: '100%' }}
                                onClick={() => props.DishSelect(props.dish)} />
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
                    </Col>
                </Container>
            </Fragment>

        </div>
    )
}
