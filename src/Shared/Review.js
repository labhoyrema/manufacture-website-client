import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://damp-bastion-77558.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(review);
  return (
    <>
      {review.map((r) => (
        <p>{r._id}</p>
      ))}
      {/* {review.map((review) => (
        <div key={review._id} class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title">{review.ratings}</h2>
            <p>{review.Description}</p>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default Review;
