import { Container, Row, Col, Form, Button } from "react-bootstrap";

let Register = () => {
  return (
    <section id="register">
      <Container>
        <Row>
          <Col xs={9} className="mx-auto">
            <Form>
              <Form.Group className="mb-3" controlId="nick">
                <Form.Label>Nick</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nick" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua Senha" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Registrar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Register;