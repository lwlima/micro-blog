import Post from './../layout/Post';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Navbar from './../layout/Navbar';

let Feed = () => {
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
      <h1 className="text-center">Micro Blog</h1>
      <Container fluid>
        <Row>
          <Col xs={2} id="person">
          <Navbar />
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