import Post from './../layout/Post';
import { useState } from 'react';
import { BsPlusLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import NewPostModal from './../layout/NewPostModal';


let Feed = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <section id="feed">
      <NewPostModal show={modalShow} onHide={() => setModalShow(false)} />
      <h1 className="text-center">Micro Blog</h1>
      <div className="container-fluid">
        <div className="row">
          <div id="person" className="col-2">
            <div id="new-post" onClick={() => setModalShow(true)} className="rounded-circle bg-dark text-center mx-auto">
              <IconContext.Provider value={{ color: "white", className: "new-post", size: "1.5em", title: "New post" }}>
                <BsPlusLg />
              </IconContext.Provider>
            </div>
          </div>
          <div id="content" className="col-10">
            <div className="row border">
              <div className="col-12">
                <Post />
                <Post />
                <Post />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feed;