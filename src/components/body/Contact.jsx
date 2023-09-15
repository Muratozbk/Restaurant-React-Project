import React, { Component, Fragment } from 'react'
import { Container, Col, Form, Row, Button, FloatingLabel } from 'react-bootstrap'

export class Contact extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            mobile: "",
            email: "",
            agree: false,
            message: ""
        }
    };
    handleInputChange = event => {
        const value = event.target.type === 'checkbox' ?
            event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    };
    handleSubmit = event => {
        console.log(this.state)
        event.preventDefault()
    }

    render() {
        document.title = "Contact Page"
        return (
            <div>
                <Fragment>
                    <Container>
                        <h1>Send us your Feedback</h1>
                        <Form onSubmit={this.handleSubmit}>

                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text"
                                        name='firstname'
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange} />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        name='lastname'
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                        type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="number"
                                        name='mobile'
                                        value={this.state.mobile}
                                        onChange={this.handleInputChange} placeholder="Mobile" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"
                                        name='email'
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        placeholder="Enter Your Email" />
                                </Form.Group>
                            </Row>

                            <FloatingLabel controlId="floatingTextarea" label="Message" className='mb-3'>
                                <Form.Control as='textarea' placeholder="Leave a Message Here" name='message'
                                    value={this.state.message}
                                    onChange={this.handleInputChange} />
                            </FloatingLabel>

                            <Form.Label>Message</Form.Label>
                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox"
                                    name='agree'
                                    checked={this.state.agree}
                                    onChange={this.handleInputChange}
                                    label="May we contact you?" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Fragment>
            </div >
        )
    }
}

export default Contact