import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from 'react';

let Login = () => {
  const [input, setInput] = useState([{ email: '', password: '' }]);
  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const [alertType, setAlertType] = useState();

  let isLogged = sessionStorage.getItem('isLogged');
  if (isLogged) {
    window.location.href = "/"
  }

  let handleChange = event => {
    input[event.target.name] = event.target.value;
    setInput(input);
  }

  let handleSubmit = event => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('email', input['email'])
    formData.append('password', input['password'])

    fetch(`php/login.php/`, {
      method: 'POST',
      body: formData
    })
      .then(function (response) {
        if (response.ok)
          return response.json();

        throw new Error('Erro ao logar no sistema, tente novamente.')
      })
      .then(function (data) {
        if (Array.isArray(data)) {
          window.sessionStorage.setItem("isLogged", true);
          window.sessionStorage.setItem("author", data[0].nick);

          window.location.href = '/';
        }
        else {
          setAlertMessage(data);
          setAlertType('danger');
          setAlertShow(true);
        }
      })
      .catch(function (error) {
        setAlertMessage(error);
        setAlertType('danger');
        setAlertShow(true);
      })
  }

  return (
    <section id="login">
      <Container>
        <Row>
          <Col xs={9} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email" onChange={handleChange} value={input[1]} placeholder="Digite seu email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" name="password" onChange={handleChange} value={input[2]} placeholder="Digite sua Senha" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mb-3">
                Login
              </Button>

              <Alert variant={alertType} show={alertShow} onClose={() => setAlertShow(false)} dismissible>
                {alertMessage}
              </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login;