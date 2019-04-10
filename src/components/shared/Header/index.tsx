import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FunctionComponent = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">
      <FontAwesomeIcon icon="cloud" />
      {""} Teravoz Client
    </Navbar.Brand>
  </Navbar>
);

export default Header;
