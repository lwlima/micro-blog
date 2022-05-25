import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPlusLg, BsPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useState } from 'react';
import NewPostModal from './components/layout/NewPostModal'

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <NewPostModal show={modalShow} onHide={() => setModalShow(false)} />

      <h1 class="text-center">Micro Blog</h1>
      <div class="container-fluid">
        <div class="row">
          <div id="person" class="col-2">
            <div id="new-post" onClick={() => setModalShow(true)} class="rounded-circle bg-dark text-center mx-auto">

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
      <footer class="text-center">
        <p>Teste prático - <a target="_blank" class="trapi" href="www.trapi.com.br">Trapi</a></p>
        <p>Desenvolvido por <a target="_blank" href="www.lucianolima.dev">Luciano Lima</a></p>
      </footer>
    </div>
  );
}

export default App;
