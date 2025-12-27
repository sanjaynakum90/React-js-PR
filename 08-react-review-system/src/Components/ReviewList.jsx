import React from "react";
import { Container, Card, Badge } from "react-bootstrap";

const ReviewList = ({ listData }) => {
    return (
        <Container className="my-4">
            {listData.length === 0 ? (
                <p className="text-center text-muted">
                    No reviews yet. Be the first to review! ✨
                </p>
            ) : (
                listData.map((item, index) => (
                    <Card className="mb-3 shadow-sm" key={index}>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                {item.name}
                                <Badge bg="warning" text="dark">
                                    {item.rate}
                                </Badge>
                            </Card.Title>

                            <Card.Text className="text-muted">
                                {item.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            )}
        </Container>
    );
};

export default ReviewList;
