import React, { useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  // Function to handle adding a new review
  const addReview = () => {
    if (newReview.trim() !== '') {
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      setNewReview('');
    }
  };
    return (
        <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write a review"
      />
      <button onClick={addReview}>Add Review</button>
    </div>
    );
};

export default Review;