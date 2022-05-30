import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Users from "./Users";

const AllUsers = () => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("https://damp-bastion-77558.herokuapp.com/user").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return;
  }

  return (
    <div class="overflow-x-auto w-full">
      <tbody
        class="table w-full 
      "
      >
        <thead>
          <tr>
            <th>Email</th>
            <th>Make Admin</th>
            <th>Delete User</th>
            <th></th>
          </tr>
        </thead>
        {user.map((user) => (
          <Users key={user._id} user={user} refetch={refetch}></Users>
        ))}
      </tbody>
    </div>
  );
};

export default AllUsers;
