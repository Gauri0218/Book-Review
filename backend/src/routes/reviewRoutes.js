const express = require('express');
const router = express.Router();

// Sample data
const reviews = [
  { id: 1, bookId: 1, review: 'Excellent book on habits!', reviewer: 'Alice' },
  { id: 2, bookId: 2, review: 'Inspiring and deep.', reviewer: 'Bob' }
];

// GET all reviews
router.get('/', (req, res) => {
  res.json(reviews);
});

// POST a review
router.post('/', (req, res) => {
  const newReview = {
    id: reviews.length + 1,
    ...req.body
  };
  reviews.push(newReview);
  res.status(201).json(newReview);
});

module.exports = router;
