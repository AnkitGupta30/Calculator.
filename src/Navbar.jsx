import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-3 bg-slate-700 text-white h-[3.1rem]">
      <div className="text-2xl font-bold text-gray-200">Ankit</div>
      <div className="text-sm font-semibold hover:-translate-x-2 duration-75 hover:italic cursor-pointer">eCalculator</div>
    </div>
  );
};

export default Navbar;
