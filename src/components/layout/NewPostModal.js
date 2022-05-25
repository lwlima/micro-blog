import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nova postagem
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea id="text-post" onChange={handleChange} onKeyPress={handleKeyPress} value={text} className="col-12" rows="7" placeholder="O que está acontecendo?"></textarea>
      </Modal.Body>
      <Modal.Footer>
        <p>{200 - text.length} Caracteres restantes</p>
        <Button>Postar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewPostModal;