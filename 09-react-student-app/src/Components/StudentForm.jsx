import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StudentForm = ({ data }) => {
    const [input, setInput] = useState({
        grid: 0,
        name: "",
        course: "",
        number: 0,
        address: "",
    });

    const handleInputData = (e, field) => {
        setInput((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleSubmitData = (e) => {
        e.preventDefault();
        data(input);
        setInput({ grid: "", name: "", course: "", number: "", address: "" });
    };

    return (
        <Container className="mt-5 mb-5">
            <Card className="shadow-lg border-0">
                <Card.Body className="p-4">
                    <h2 className="text-center mb-4 fw-bold text-success">
                        Student Registration
                    </h2>

                    <Form onSubmit={handleSubmitData}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>GR-ID</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter GRID"
                                        required
                                        value={input.grid}
                                        onChange={(e) => handleInputData(e, "grid")}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Full Name"
                                        required
                                        value={input.name}
                                        onChange={(e) => handleInputData(e, "name")}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Course Name"
                                        required
                                        value={input.course}
                                        onChange={(e) => handleInputData(e, "course")}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="+91"
                                        required
                                        value={input.number}
                                        onChange={(e) => handleInputData(e, "number")}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-4">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Address"
                                required
                                value={input.address}
                                onChange={(e) => handleInputData(e, "address")}
                            />
                        </Form.Group>

                        <Button
                            variant="success"
                            type="submit"
                            className="w-100 fw-semibold"
                        >
                            Add Student
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default StudentForm;
