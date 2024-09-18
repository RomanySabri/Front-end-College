import React from "react";
import img from "../image/Untitled_design_1.png";
import { Form, Button } from "react-bootstrap";
export default function LoginStudent() {
  return (
    <div className="log_student">
      <div className="all">
        <div className="text">
          <h1>Wolcome in Techon Table</h1>
          <p>Join our to get the latest news in your table</p>
          <div className="buttons">
            <Form>
              <Form.Group className="pos" controlId="Id">
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="Enter your ID"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
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
