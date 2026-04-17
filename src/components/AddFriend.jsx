import React from "react";
import { FaPlus } from "react-icons/fa";

function AddFriend() {
  return (
    <div className="w-full text-center pt-[80px] container mx-auto mx-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Friends to keep close in your life
      </h1>
      <p className="mt-4 mx-5">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn btn-success mt-6 bg-[rgb(36,77,63)] text-white border-none">
        <FaPlus /> Add Friend
      </button>
    </div>
  );
}

export default AddFriend;
