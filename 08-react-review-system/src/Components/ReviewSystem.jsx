import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { Container } from "react-bootstrap";

const ReviewContainer = () => {
    const [reviews, setReviews] = useState([]);

    const FormData = (data) => {
        setReviews((prev) => [...prev, data]);
    };

    return (
        <Container>
            <h2 className="text-center my-4">Customer Reviews</h2>
            <ReviewForm data={FormData} />
            <ReviewList listData={reviews} />
        </Container>
    );
};

export default ReviewContainer;
