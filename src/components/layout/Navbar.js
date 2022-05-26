import { Nav, Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import NewPostModal from './../layout/NewPostModal';
import { useState } from 'react';

let Navbar = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Nav defaultActiveKey="/home" className="flex-column text-center">
      <NewPostModal show={modalShow} onHide={() => setModalShow(false)} />
      <Nav.Link href="/">Feed</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Registrar</Nav.Link>

      <Button id="new-post" onClick={() => setModalShow(true)} className="rounded-circle bg-dark mx-auto mt-5 mb-5">
        <IconContext.Provider value={{ color: "white", size: "1.5em", title: "New post" }}>
          <BsPlusLg />
        </IconContext.Provider>
      </Button>
    </Nav>
  )
}

export default Navbar;