import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";


const ReviewForm = ({ data }) => {
    const [input, setInput] = useState({
        name: "",
        description: "",
        rate: "",
    });

    const handleChange = (field, e) => {
        setInput({ ...input, [field]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        data(input)
        setInput({ name: "", description: "", rate: "" });
    };

    return (
        <Container className="my-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title className="mb-4 text-center">
                        Leave a Review ⭐
                    </Card.Title>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={input.name}
                                onChange={(e) => handleChange("name", e)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Write your review..."
                                value={input.description}
                                onChange={(e) => handleChange("description", e)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Rating</Form.Label>
                            <Form.Select
                                value={input.rate}
                                onChange={(e) => handleChange("rate", e)}
                                required
                            >
                                <option value="">Select rating</option>
                                <option value="⭐">1 ⭐</option>
                                <option value="⭐⭐">2 ⭐⭐</option>
                                <option value="⭐⭐⭐">3 ⭐⭐⭐</option>
                                <option value="⭐⭐⭐⭐">4 ⭐⭐⭐⭐</option>
                                <option value="⭐⭐⭐⭐⭐">5 ⭐⭐⭐⭐⭐</option>
                            </Form.Select>
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                                Submit Review
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ReviewForm;
