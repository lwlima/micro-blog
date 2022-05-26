import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from 'react';

let Login = () => {
  const [input, setInput] = useState([{ email: '', password: '' }]);
  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const [alertType, setAlertType] = useState();

  let handleChange = event => {
    input[event.target.name] = event.target.value;
    setInput(input);
    console.log(input);
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
          return response.text();

        throw new Error('Erro ao logar no sistema, tente novamente.')
      })
      .then(function (text) {
        if(text === '/')
          window.location.href = text;
        else{
          setAlertMessage(text);
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