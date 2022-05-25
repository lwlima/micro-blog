import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPlusLg, BsPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons";

function App() {
  return (
    <div>
      <h1 class="text-center">Micro Blog</h1>
      <div class="container-fluid">
        <div class="row">
          <div id="person" class="col-2">
            <div id="new-post" class="rounded-circle bg-dark text-center">
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
