import Post from './../layout/Post';
import { useState, useEffect } from 'react';
import { BsPlusLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import NewPostModal from './../layout/NewPostModal';
import { Container, Row, Col, Button } from "react-bootstrap";

let Feed = () => {
  const [modalShow, setModalShow] = useState(false);
  const [post, setPost] = useState([]);


  useEffect(() => {
    fetch('api/api.php')
      .then(function (response) {
        if (response.ok)
          return response.json();
      })
      .then((data) => {
        setPost(data);
      })
  }, []);

  return (
    <section id="feed">
      <NewPostModal show={modalShow} onHide={() => setModalShow(false)} />
      <h1 className="text-center">Micro Blog</h1>
      <Container fluid>
        <Row>
          <Col xs={2} id="person">
            <Button id="new-post" onClick={() => setModalShow(true)} className="rounded-circle bg-dark">
              <IconContext.Provider value={{ color: "white", size: "1.5em", title: "New post" }}>
                <BsPlusLg />
              </IconContext.Provider>
            </Button>
          </Col>
          <Col xs={10} id="content">
            <Row className="border">
              <Col xs={12} className="col-12">
                {post.map((posts) =>
                  <Post text={posts.text} author={posts.author} date={posts.date} />
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Feed;