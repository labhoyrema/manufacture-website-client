import React, { useEffect, useState } from "react";

import "./Home.css";
import { useNavigate } from "react-router-dom";
import Review from "../../Shared/Review";

const Home = () => {
  const [products, setProduct] = useState([]);
  const [review, setReview] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://damp-bastion-77558.herokuapp.com/productdata", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const singleProduct = (id) => {
    navigate(`purchase/${id}`);
  };

  return (
    <>
      <div class="hero min-h-screen bg-base-200 cover-bg">
        <div className="overlay min-h-screen w-full">
          <div class="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            {/* <img src={totals} alt="" class="max-w-sm rounded-lg shadow-2xl " /> */}
            <div className="lg:py-20">
              <h1 class="lg:text-5xl font-bold text-white lg:pt-20">
                One-Stop Tools Station
              </h1>
              <p class="py-6 text-white">
                We are serving all over Bangladesh since 2019.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 ">
              Recent Products
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.slice(0, 6).map((product) => (
                <div key={product._id} class="card w-96 bg-base-100 shadow-xl">
                  <figure class="px-10 pt-10">
                    <img src={product.image} alt="Shoes" class="rounded-xl" />
                  </figure>
                  <div class="card-body items-center text-center">
                    <h2 class="card-title">{product.title}</h2>
                    <p>{product.Description.slice(0, 60)}</p>
                    <p>Minimum Qunatity :{product.minimumquantity}</p>
                    <p>Avilable Qunatity :{product.avilablequantity}</p>
                    <div class="card-actions">
                      <button
                        class="btn btn-primary"
                        onClick={() => singleProduct(product._id)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 ">
                Clients Reviews
              </h2>
            </div>
            <Review />
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold">Happy Clients</h2>
        </div>
        <div class="stats stats-vertical lg:stats-horizontal shadow  ">
          <div class="stat w-72 text-center ">
            <div class="stat-title text-xl">Sales</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div class="stat w-72 text-center ">
            <div class="stat-title">Total Clients</div>
            <div class="stat-value">4,200</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div class="stat text-center w-72 ">
            <div class="stat-title">New Clients</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div class="stat text-center w-72  ">
            <div class="stat-title">Totals Yearly Sales</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
