import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
  const [reviewer, setReviewer] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5002/reviews', {
        reviewer,
        comment,
        rating,
      });
      alert('Review submitted!');
      setReviewer('');
      setComment('');
      setRating(5);
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review');
    }
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" value={reviewer} onChange={(e) => setReviewer(e.target.value)} required />
        </div>
        <div>
          <label>Comment:</label><br />
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
        </div>
        <div>
          <label>Rating (1–5):</label><br />
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
