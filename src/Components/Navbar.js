import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../image/eelu_ar_and_En-02_2024.png";
import "./Navbar.css";
export default function NavBar() {
  return (
    <div className="na">
      <Navbar data-bs-theme="dark">
        <Container>
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Nav className="links">
            <Link to="">About</Link>
            <Link to="">Login</Link>
            <Link to="https://sis.eelu.edu.eg/static/index.html" target="blank">
              Sis
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
