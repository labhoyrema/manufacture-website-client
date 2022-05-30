import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin.js";

const DeshBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <Outlet></Outlet>
          <div className="flex justify-end">
            <label
              for="my-drawer-2"
              class="btn bg-accent-focus drawer-button lg:hidden text-end mt-16"
            >
              DeshBorad
            </label>
          </div>
        </div>
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/deshboard">My Orders</Link>
            </li>
            <li>
              <Link to="/deshboard/addreview">Add Review</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to="/deshboard/additem">Add Products</Link>
                </li>

                <li>
                  <Link to="/deshboard/allusers">All users</Link>
                </li>
                <li>
                  <Link to="/deshboard/manageorders">Manage orsers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeshBoard;
