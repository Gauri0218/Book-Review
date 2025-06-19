import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Welcome to the Book Review Platform</h2>
    <nav>
      <ul>
        <li><Link to="/books">View Books</Link></li>
        <li><Link to="/reviews">View Reviews</Link></li>
        <li><Link to="/add-review">Add a Review</Link></li>
      </ul>
    </nav>
  </div>
);

export default Home;
