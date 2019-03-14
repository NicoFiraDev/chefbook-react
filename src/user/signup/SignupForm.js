import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


class SignupForm extends Component {
  render() {
    return (
      <Container fluid className="m-5">
        <Row>
          <Col md="6">
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Control type="text" placeholder="Nombres" />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Control type="text" placeholder="Apellidos" />
              </Form.Group>

              <Form.Group controlId="formBasicLastEmail">
                <Form.Control type="email" placeholder="Correo Electroónico" />
              </Form.Group>

              <Form.Group controlId="formBasicLastAboutme">
                <Form.Control as="textarea" placeholder="Sobre Mi" rows="3" />
              </Form.Group>

              <Form.Group controlId="formBasicLastProfilePic">
                <Form.Control type="text" placeholder="Sube tu foto de Perfil" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Crear Cuenta
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupForm