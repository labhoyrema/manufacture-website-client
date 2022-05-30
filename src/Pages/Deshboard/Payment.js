import React from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Loading from "../Loading/Loading";
import { useQuery } from "react-query";

const stripePromise = loadStripe(
  "pk_test_51L4hXbGF0yklkiUc1h2BnuR5f1COph09ro5XR9XuoJOndlNNHEzNo622QMmC2Tk9dqQFDhNrLSfObCiMp792WbAI00TvixYSE9"
);

const Payment = () => {
  const { id } = useParams();

  const { data: orders, isLoading } = useQuery(["booking", id], () =>
    fetch(`https://damp-bastion-77558.herokuapp.com/orders/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex justify-spacebetween gap-8">
      <div class="card card-compact border-2 w-96 py-8 px-2 mt-16 bg-base-100 shadow-xl">
        <div class="card-body ">
          <h2 class="card-title">{orders.title}</h2>
          <p className="text-xl">Product Quantity {orders.quantity} pcs</p>
          <p className="text-xl"> Please Pay {orders.price} $</p>
        </div>
      </div>
      <div class="card card-compact w-96 py-12 border-2 px-2 bg-base-100 my-16 shadow-xl">
        <Elements stripe={stripePromise}>
          <CheckoutForm orders={orders} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
