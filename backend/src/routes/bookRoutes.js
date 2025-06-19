const express = require('express');
const router = express.Router();

// Sample data
const books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' }
];

// GET all books
router.get('/', (req, res) => {
  res.json(books);
});

// GET book by ID
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

module.exports = router;
