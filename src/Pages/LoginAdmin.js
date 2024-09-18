import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import img from "../image/Untitled_design_1.png";
// import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function LoginAdmin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login/",
        formData
      );
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/schedules");
      console.log(response.status);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="log_admin">
      <div className="all">
        <div className="text">
          <div className="buttons">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="Email">
                <Form.Label>
                  <FaUserCheck />
                  Enter Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>
                  <RiLockPasswordFill />
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
          </div>
        </div>
        <div className="image">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}
