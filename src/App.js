import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPlusLg, BsPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

function NewPostModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nova postagem
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea class="col-12" rows="7" placeholder="O que está acontecendo?"></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button>Postar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <NewPostModal show={modalShow} onHide={() => setModalShow(false)} />

      <h1 class="text-center">Micro Blog</h1>
      <div class="container-fluid">
        <div class="row">
          <div id="person" class="col-2">
            <div id="new-post" onClick={() => setModalShow(true)} class="rounded-circle bg-dark text-center">

              <IconContext.Provider value={{ color: "white", className: "new-post", size: "1.5em", title: "New post" }}>
                <BsPlusLg />
              </IconContext.Provider>
            </div>
          </div>
          <div id="content" class="col-10">
            <div class="row border">
              <div class="col-12">
                <div class="row border-top border-bottom">
                  <div class="col-2 text-center">
                    <IconContext.Provider value={{ color: "black", className: "sla", size: "1.5em", title: "Avatar" }}>
                      <BsPersonFill />
                    </IconContext.Provider>
                  </div>
                  <div class="col-10">
                    <p><b>Nickname</b> <span class="secondary">- 1h</span></p>
                    <p>Nullam a tincidunt dolor. Aenean et porta mauris, eget venenatis odio. Sed vel
                      fermentum ipsum. Curabitur laoreet felis purus, quis efficitur felis semper a. Praesent orci aliquam.
                    </p>
                  </div>
                </div>
                <div class="row border-top border-bottom">
                  <div class="col-2 text-center">
                    <IconContext.Provider value={{ color: "black", className: "sla", size: "1.5em", title: "Avatar" }}>
                      <BsPersonFill />
                    </IconContext.Provider>
                  </div>
                  <div class="col-10">
                    <p><b>Nickname</b> <span class="secondary">- 1h</span></p>
                    <p>Nullam a tincidunt dolor. Aenean et porta mauris, eget venenatis odio. Sed vel
                      fermentum ipsum. Curabitur laoreet felis purus, quis efficitur felis semper a. Praesent orci aliquam.
                    </p>
                  </div>
                </div>
                <div class="row border-top border-bottom">
                  <div class="col-2 text-center">
                    <IconContext.Provider value={{ color: "black", className: "sla", size: "1.5em", title: "Avatar" }}>
                      <BsPersonFill />
                    </IconContext.Provider>
                  </div>
                  <div class="col-10">
                    <p><b>Nickname</b> <span class="secondary">- 1h</span></p>
                    <p>Nullam a tincidunt dolor. Aenean et porta mauris, eget venenatis odio. Sed vel
                      fermentum ipsum. Curabitur laoreet felis purus, quis efficitur felis semper a. Praesent orci aliquam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
