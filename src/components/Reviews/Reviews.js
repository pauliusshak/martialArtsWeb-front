import React, { useContext, useRef, useState, useEffect } from 'react';
import './style.css';
import MainContext from './../../mainContext/MainContext';
import SingleReview from './SingleReview';
import { Rating } from 'react-simple-star-rating';

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [getMsg, setMsg] = useState('');
  const reviewRef = useRef();
  const { reviews, setReviews, userOnline, getProfilePhoto } =
    useContext(MainContext);

  function addReview() {
    const info = {
      username: userOnline,
      review: reviewRef.current.value,
      photo: getProfilePhoto,
      date: new Date(),
      rating: rating,
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(info),
    };
    fetch('http://localhost:4000/addReview', options)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setMsg(data.error);
        } else {
          setReviews([...reviews, data.newReview]);
          setMsg('');
          reviewRef.current.value = '';
        }
      });
  }

  const handleRating = rating => {
    setRating(rating);
  };

  useEffect(() => {
    fetch('http://localhost:4000/loadReviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data.reviews);
      });
  });

  return (
    <div className="container">
      {reviews.map((x, i) => (
        <SingleReview key={i} x={x} />
      ))}
      {userOnline && (
        <div className="reviewBox">
          <textarea ref={reviewRef}
            type="text"
            placeholder="Add new comment (max 500 characters)..."
          />
          <Rating onClick={handleRating} ratingValue={rating} />
          <button onClick={addReview}>Add review</button>

          <h5>{getMsg}</h5>
        </div>
      )}
    </div>
  );
};

export default Reviews;
