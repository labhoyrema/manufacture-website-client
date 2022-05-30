import React from "react";
import LoadingSvg from "../../assets/Image/Loading.svg";
const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <img src={LoadingSvg} alt="" />
    </div>
  );
};

export default Loading;
