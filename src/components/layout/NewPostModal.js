import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';

let NewPostModal = props => {
  const [text, setText] = useState("");
  const MAXCHAR = 200;

  let handleKeyPress = event => {
    if (text.length === MAXCHAR && event.key !== "Backspace")
      event.preventDefault();
  }

  let handleChange = event => {
    setText(event.target.value);
  }

  let handleSubmit = event => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('text', text);
    formData.append('author', 'nickname');

    fetch(`api/api.php/`, {
      method: 'POST',
      body: formData
    })
      .then(function (response) {
        if (response.ok)
          return response.text();

        throw new Error('Erro ao registrar usuário, tente novamente.')
      })
      .then(function (text) {
        if(text == '/')
          window.location.href = text;
      })
      .catch(function (error) {
      })
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nova postagem
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <textarea id="text-post" onChange={handleChange} name="text" onKeyPress={handleKeyPress} value={text} className="col-12" rows="7" placeholder="O que está acontecendo?"></textarea>
        </Modal.Body>
        <Modal.Footer>
          <p>{200 - text.length} Caracteres restantes</p>
          <Button type="submit">Postar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default NewPostModal;