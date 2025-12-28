import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ReviewForm = ({data}) => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    rate: "",
  });

  const handleInputData = (identifier, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    // console.log(input);
    data(input);
    setInput({ name: "", description: "", rate: "" });
  };
  return (
    <>
      <Container className="border mt-5 p-5 mb-5">
        <Form onSubmit={handleSubmitData}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              className="w-50"
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => handleInputData("name", e)}
              value={input.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              className="w-50"
              rows={3}
              onChange={(e) => handleInputData("description", e)}
              value={input.description}
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            value={input.rate}
            onChange={(e) => handleInputData("rate", e)}
            className="w-50 mb-3"
          >
            <option>Select Rating</option>
            <option value="⭐">1</option>
            <option value="⭐⭐">2</option>
            <option value="⭐⭐⭐">3</option>
            <option value="⭐⭐⭐⭐">4</option>
            <option value="5⭐⭐⭐⭐⭐">5</option>
          </Form.Select>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default ReviewForm;