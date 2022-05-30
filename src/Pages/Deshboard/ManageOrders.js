import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ManageOrders = () => {
  const [allorder, setAllorder] = useState([]);

  useEffect(() => {
    fetch("https://damp-bastion-77558.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => setAllorder(data));
  }, []);

  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full  table-compact">
        <thead>
          <tr>
            <th>product name </th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Payment</th>
          </tr>
        </thead>
        {allorder.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src={order.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{order.title}</div>
                  </div>
                </div>
              </td>
              <td>
                {order.quantity} pcs
                <br />
              </td>
              <td>Total Price: {order.price}$</td>
              <th>
                <button class="btn bg-red-500 btn-xs">delete</button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageOrders;
