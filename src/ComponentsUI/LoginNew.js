import { Col, Container, Row } from "react-bootstrap";
import loginImg from "../images/login-img.png";
import "./LoginNew.css";

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const userContext = createContext();
const LoginNew = ({show}) => {
  show(true)
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    const value = e.currentTarget.value;
    console.log(value);
    setEmail(value);
    if (emailRegEx.test(value) === false) {
      setEmailError("للأسف! ,الايميل لابد ان يكون هكذا 'name@gamil.com'");
    } else {
      setEmailError(null);
    }
  };
  const handlePasswordChange = (e) => {
    const value = e.currentTarget.value;
    console.log(value);
    setPassword(value);
    if (passwordRegEx.test(value) === false) {
      setPasswordError("للأسف! ,كلمة المرور غير صحيحة");
    } else {
      setPasswordError(null);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email.length === "0") {
      setEmailError("الايميل لا ينبغي ان يكون فارغ");
    }
    if (password.length === "0") {
      setEmailError("كلمة المرو لا ينبغي ان تكون فارغة");
    }
    if (
      emailRegEx.test(email) === true &&
      passwordRegEx.test(password) === true &&
      email === "mrefaay271@gmail.com" &&
      password === "11Gh@@llloo"
    ) {
      // e.currentTarget.submit();
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/user-data", { replace: true });
    }
  };
  const [emaiFromLocalStr, setEmaiFromLocalStr] = useState("");
  const [passFromLocalStr, setPassFromLocalStr] = useState("");
  useEffect(() => {
    const loggedEmail = localStorage.getItem("email");
    const loggedPass = localStorage.getItem("password");
    if (loggedEmail && loggedPass) {
      setEmaiFromLocalStr(loggedEmail);
      setPassFromLocalStr(loggedPass);
   
  
    }
  }, []);
  email = emaiFromLocalStr;
  password = passFromLocalStr;
  return (
    <userContext.Provider value={{ email }}>
      <div className="login p-3">
        <Container>
          <Row className="align-items-center" xs={1} md={1} lg={2}>
            <Col>
              <h1 id="head">مرحبا بعودتك !</h1>
              <p>
                للبقاء على اتصال معنا يرجى تسجيل الدخول باستخدام معلوماتك
                الشخصية
              </p>
              <form onSubmit={handleFormSubmit} id="login-form">
                <div className="input-filed">
                  <svg
                    id="email-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  <input
                    type="e-mail"
                    placeholder="الايميل"
                    onChange={handleEmailChange}
                    dir="rtl"
                    // value={email}
                  />
                  {emailError != null ? (
                    <svg
                      id="wrong"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                    </svg>
                  ) : (
                    <svg
                      id="check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  )}
                </div>
                {emailError != null ? (
                  <span style={{ color: "red", fontSize: "18px" }}>
                    {emailError}
                  </span>
                ) : null}
                <div className="input-filed">
                  <svg
                    id="lock-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                  </svg>
                  <input
                    type="password"
                    placeholder="كلمة المرور"
                    onChange={handlePasswordChange}
                    dir="rtl"
                    // value={password}
                  />
                  {passwordError != null ? (
                    <svg
                      id="passwrong"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                    </svg>
                  ) : (
                    <svg
                      id="check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  )}
                </div>
                {passwordError != null ? (
                  <span style={{ color: "red" }}>{passwordError}</span>
                ) : null}
                <br />
                <button id="submit-btn">تسجيل الدخول</button>
              </form>
            </Col>
            <Col className="d-sm-none d-md-none d-lg-block col2">
              <img src={loginImg} className="img-fluid" alt="Login Image" />
            </Col>
          </Row>
        </Container>
      </div>
    </userContext.Provider>
  );
};
export default LoginNew;
