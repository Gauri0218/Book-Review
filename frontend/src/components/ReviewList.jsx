import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5002/reviews')
      .then((res) => setReviews(res.data))
      .catch((err) => console.error('Error fetching reviews:', err));
  }, []);

  return (
    <div>
      <h2>All Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <strong>{review.reviewer}</strong>: {review.comment} (Rating: {review.rating}/5)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
