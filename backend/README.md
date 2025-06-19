# Book Review Platform Backend

## Overview
This is the backend for the Book Review Platform, built using Node.js and Express. It provides a RESTful API for managing book reviews, allowing users to submit and retrieve reviews.

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd book-review-platform/backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Database Configuration**
   - Ensure you have a MongoDB or SQL database set up.
   - Update the database connection settings in `src/config/db.js`.

4. **Run the application**
   ```
   npm start
   ```

## API Endpoints

### Reviews
- **GET /reviews**
  - Retrieves a list of all reviews.
  
- **POST /reviews**
  - Submits a new review. Requires a JSON body with the following fields:
    - `bookId`: ID of the book being reviewed.
    - `userId`: ID of the user submitting the review.
    - `rating`: Rating given to the book.
    - `content`: Text of the review.

## Folder Structure
- `src/`
  - `controllers/`: Contains the review controller logic.
  - `models/`: Contains the review model schema.
  - `routes/`: Contains the API routes for reviews.
  - `config/`: Contains database configuration.

## License
This project is licensed under the MIT License.