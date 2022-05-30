import React from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.ratings < 1 || data.ratings > 5) {
      return toast("please give above 1 or below 5");
    }
    const url = `https://damp-bastion-77558.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("New product added");
      });
  };

  return (
    <>
      <div className="max-w-7xl w-2/4 mx-auto px-2  sm:px-6 lg:px-8 pt-16 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            placeholder="Ratings"
            {...register("ratings")}
            class="input input-bordered input-error w-full max-w-xs"
            required
          />

          <textarea
            className="textarea textarea-info w-full max-w-xs my-2"
            type="text"
            placeholder="description"
            {...register("Description")}
            class="input input-bordered input-error w-full max-w-xs my-2"
            required
          />

          <input type="submit" className="btn w-80 btn-primary my-4 " />
        </form>
      </div>
    </>
  );
};

export default AddReview;
