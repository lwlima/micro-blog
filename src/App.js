import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPlusLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useState } from 'react';
import NewPostModal from './components/layout/NewPostModal'
import Footer from './components/layout/Footer'
import Post from './components/layout/Post'

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
                <Post />
                <Post />
                <Post />
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default App;
