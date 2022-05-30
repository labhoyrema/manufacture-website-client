import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Myorders = () => {
  const [user] = useAuthState(auth);
  const [myorder, setMyorder] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://damp-bastion-77558.herokuapp.com/orders?user=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setMyorder(data));
    }
  }, [user]);

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
        {myorder.map((order) => (
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
                {order.price && !order.paid && (
                  <Link to={`/deshboard/payment/${order._id}`}>
                    <button className="btn btn-xs btn-success">pay</button>
                  </Link>
                )}
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Myorders;
