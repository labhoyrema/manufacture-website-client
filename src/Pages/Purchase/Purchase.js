import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const { singleProductId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(50);
  const [user, loading, eroor] = useAuthState(auth);
  useEffect(() => {
    const url = `https://damp-bastion-77558.herokuapp.com/productdata/${singleProductId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((preCount) => preCount - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < 200) {
      setQuantity((preCount) => preCount + 1);
    }
  };
  const totalPrice = product.price * quantity;

  const orderConfarm = () => {
    const order = {
      title: product.title,
      price: totalPrice,
      quantity: quantity,
      productId: product._id,
      user: user.email,
      image: product.image,
    };
    fetch("https://damp-bastion-77558.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("order added to cart");
      });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl  mx-auto px-2 flex justify-center lg:py-8 sm:px-6 lg:px-8">
        <div class="card card-side bg-base-100 shadow-xl lg:w-2/4">
          <figure>
            <img src={product.image} alt="Movie" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{product.title}</h2>
            <p>{product.Description}</p>
            <div>
              <div>
                <span>Minimum Qunatity : </span>
                <button
                  onClick={handleDecrement}
                  type="button"
                  className="px-5 border mx-2 btn-primary rounded-lg"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={handleIncrement}
                  type="button"
                  className="px-5 border mx-2 btn-primary rounded-lg"
                >
                  +
                </button>
              </div>
              <p className="py-2">
                Price per Unit :<strong> {product.price}$</strong>
              </p>
              <p>
                Total price :<strong> {totalPrice}$</strong>
              </p>
            </div>
            <div class="card-actions justify-end">
              <button class="btn btn-primary" onClick={orderConfarm}>
                order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
