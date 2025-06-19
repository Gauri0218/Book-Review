const Review = require('../models/reviewModel');

// Get all reviews
exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving reviews', error });
    }
};

// Submit a new review
exports.submitReview = async (req, res) => {
    const { bookId, userId, rating, content } = req.body;

    const newReview = new Review({
        bookId,
        userId,
        rating,
        content
    });

    try {
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: 'Error submitting review', error });
    }
};