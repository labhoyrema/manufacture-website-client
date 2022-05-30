import axios from "axios";
import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState([]);
  const getReview = () => {
    axios.get("https://damp-bastion-77558.herokuapp.com/review").then((res) => {
      const myRev = res.data;
      setReview(myRev);
    });
  };
  useEffect(() => getReview(), []);
  console.log(review);
  return (
    <>
      {review.map((review) => (
        <div
          key={review._id}
          class=" border-lg card w-96 bg-base-100 shadow-xl"
        >
          <div class="card-body">
            <h2 class="card-title">Ratings :{review.ratings}</h2>
            <p>{review.Description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Review;
