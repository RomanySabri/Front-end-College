import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SecSchedules() {
  return (
    <div className="lecschedules">
      <div className="all">
        <div className="buttons">
          <Form>
            <Form.Group className="pos" controlId="Id">
              <Form.Control
                type="file"
                name="id"
                placeholder="Upload Exel Sheet"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
