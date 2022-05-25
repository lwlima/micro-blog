import { IconContext } from "react-icons";
import { BsPersonFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

let Post = () => {
  return (
    <Row className="border-top border-bottom">
      <Col xs={2} className="text-center">
        <IconContext.Provider value={{ color: "black", size: "1.5em", title: "Avatar" }}>
          <BsPersonFill />
        </IconContext.Provider>
      </Col>
      <Col xs={10}>
        <p><b>Nickname</b> <span className="secondary">- 1h</span></p>
        <p>Nullam a tincidunt dolor. Aenean et porta mauris, eget venenatis odio. Sed vel
          fermentum ipsum. Curabitur laoreet felis purus, quis efficitur felis semper a. Praesent orci aliquam.
        </p>
      </Col>
    </Row>
  );
}

export default Post;