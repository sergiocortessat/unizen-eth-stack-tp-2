import React from "react";

const Loader = () => {
  return (
<div className="flex justify-center h-screen">
  <span className="circle animate-loader"></span>
  <span className="circle animate-loader animation-delay-200"></span>
  <span className="circle animate-loader animation-delay-400"></span>
</div>
  );
};

export default Loader;
