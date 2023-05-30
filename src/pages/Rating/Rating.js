import React, { useEffect, useState } from 'react';

const Rating = () => {
    const [ratings, setRatings] = useState([]);
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    const storedRatings = localStorage.getItem('ratings');
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ratings', JSON.stringify(ratings));
  }, [ratings]);

  const addRating = () => {
    const updatedRatings = [...ratings, newRating];
    setRatings(updatedRatings);
    setNewRating(0);
  };
  const calculateAverageRating = () => {
    if (ratings.length === 0) {
      return 0;
    }
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / ratings.length;
  };

    return (
        <div>
        <h2>Ratings</h2>
        <div>
          <strong>Average Rating: </strong>
          {calculateAverageRating()}
        </div>
        <div>
          <strong>Rate: </strong>
          <select value={newRating} onChange={(e) => setNewRating(Number(e.target.value))}>
            <option value={0}>Select rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button onClick={addRating}>Add Rating</button>
        </div>
      </div>
    );
};

export default Rating;