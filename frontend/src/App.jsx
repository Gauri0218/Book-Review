import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ReviewList from './components/ReviewList';
import BookList from './components/BookList';
import ReviewForm from './components/ReviewForm';

const App = () => {
  return (
    <Router>
      <div style={{ padding: '1rem' }}>
        <h1>📚 Book Review Platform</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reviews" component={ReviewList} />
          <Route path="/books" component={BookList} />
          <Route path="/add-review" component={ReviewForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
