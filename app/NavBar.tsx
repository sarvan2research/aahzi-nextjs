import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Your Logo</div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded border border-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
