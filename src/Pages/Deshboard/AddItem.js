import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `https://damp-bastion-77558.herokuapp.com/productdata`;
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
    console.log(data.title);
  };

  return (
    <div className="max-w-7xl w-2/4 mx-auto px-2 flex justify-center sm:px-6 lg:px-8 py-16 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="product title"
          {...register("title")}
          class="input input-bordered input-error w-full max-w-xs"
          required
        />

        <input
          type="text"
          placeholder="description"
          {...register("Description")}
          class="input input-bordered input-error w-full max-w-xs my-2"
          required
        />

        <input
          type="text"
          placeholder="product image"
          {...register("image")}
          class="input input-bordered input-error w-full max-w-xs my-2"
          required
        />

        <input
          type="number"
          placeholder="product quantity"
          {...register("minimumquantity")}
          class="input input-bordered input-error w-full max-w-xs my-2"
          required
        />
        <input
          type="number"
          placeholder="product avilabelquantity"
          {...register("avilablequantity")}
          class="input input-bordered input-error w-full max-w-xs my-2"
          required
        />

        <input
          type="number"
          placeholder="product price"
          {...register("price")}
          class="input input-bordered input-error w-full max-w-xs "
          required
        />

        <input type="submit" className="btn w-80 btn-primary my-4 " />
      </form>
    </div>
  );
};

export default AddItem;
