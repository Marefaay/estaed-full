import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import darkLogo from "../images/dark-logo.png";
import "./NavBar.css";
// import "../ComponentsUI/NavBar.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mode, setMode] = useState("");
  const [email, setEmail] = useState("");

  // Effect to set initial mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light"; // Default to light mode
    setMode(savedMode);
    document.body.classList.toggle("dark", savedMode === "dark");
  }, []);

  // Effect to fetch logged email from localStorage
  useEffect(() => {
    const loggedEmail = localStorage.getItem("email");
    if (loggedEmail) {
      setEmail(loggedEmail);
    }
  }, []);

  // Function to toggle between light and dark modes
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    document.body.classList.toggle("dark", newMode === "dark");
  };

  return (
    <Navbar expand="lg" className="position-sticky top-0  p-2 nav-bar">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/" id="logo">
          <img
            src={mode === "dark" ? darkLogo : logo}
            className="img-fluid"
            style={{ objectFit: "cover" }}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle-icon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" align-items-center" id="list" style={{marginRight:"auto"}}>
            <Nav.Link as={Link} to="/" id="link">
              الصفحة الرئيسية
            </Nav.Link>
            <Nav.Link as={Link} to="/user-data">إدخال البيانات</Nav.Link>
            <Nav.Link href="https://estaed.com/">منصة استعد</Nav.Link>
            <Nav.Link as={Link} to="/login">
              <button id="login-btn">{email.length !== 0 ? email : "تسجيل دخول"}</button>
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              <button id="login-btn">لوحه التحكم</button>
            </Nav.Link>
            {email.length !== 0 && (
              <Nav.Link as={Link} to="/logout">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Nav.Link>
            )}
            <span onClick={toggleMode} id="mode" style={{ cursor: 'pointer' }}>
            {mode === "light" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </span>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
