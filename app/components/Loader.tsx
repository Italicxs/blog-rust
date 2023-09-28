import React from "react";
import { BarLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BarLoader color="rgba(0, 0, 0, 1)" />
    </div>
  );
};

export default Loader;
