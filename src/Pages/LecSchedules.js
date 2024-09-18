import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
export default function LecSchedules() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch()
      .then((res) => res.json())
      .then((json) => setCourses(json));
  }, []);
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
