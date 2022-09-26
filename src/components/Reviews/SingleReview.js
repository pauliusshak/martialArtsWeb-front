import React from 'react';
import { Rating } from 'react-simple-star-rating';

const SingleReview = ({ x }) => {
  return (
    <div className="singleReview">
      <h3>{x.username}</h3>
      <img src={x.photo} alt="" />
      <p>{x.review}</p>
      <p>{x.date}</p>
      <Rating readonly={true}  ratingValue={x.rating} />
    </div>
  );
};

export default SingleReview;
