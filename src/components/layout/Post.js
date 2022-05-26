import { IconContext } from "react-icons";
import { BsPersonFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

let Post = (props) => {
  return (
    <Row className="border-top border-bottom">
      <Col xs={2} className="text-center">
        <IconContext.Provider value={{ color: "black", size: "1.5em", title: "Avatar" }}>
          <BsPersonFill />
        </IconContext.Provider>
      </Col>
      <Col xs={10}>
        <p><b>{props.author}</b> <span className="secondary">- {props.date}</span></p>
        <p>
          {props.text}
        </p>
      </Col>
    </Row>
  );
}

export default Post;