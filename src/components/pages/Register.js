import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';

let Register = () => {
  const [input, setInput] = useState([{nick: '', email: '', password: ''}]);

  let handleChange = event => {
    input[event.target.name] = event.target.value;
    setInput(input);
  }

  let handleSubmit = event => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('nick', input['nick'])
    formData.append('email', input['email'])
    formData.append('password', input['password'])

    fetch(`php/register.php/`, {
      method: 'POST',
      body: formData
    })
      .then(function (response) {
        if (response.ok)
          return response.text();

        throw new Error('Erro ao registrar usuário, tente novamente.')
      })
      .then(function (text) {

      })
      .catch(function (error) {

      })
  }

  return (
    <section id="register">
      <Container>
        <Row>
          <Col xs={9} className="mx-auto">
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nick">
                <Form.Label>Nick</Form.Label>
                <Form.Control type="text" name="nick" onChange={handleChange} value={input[1]} placeholder="Digite seu nick" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email" onChange={handleChange} value={input[2]} placeholder="Digite seu email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" name="password" onChange={handleChange} value={input[3]} placeholder="Digite sua Senha" />
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