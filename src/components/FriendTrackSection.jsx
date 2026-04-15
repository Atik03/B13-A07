import React from "react";

const FriendTrackSection = () => {
  return (
    <div className="w-full container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-8">
        <div className="h-[133px] bg-white flex items-center justify-center flex-col gap-1 rounded-lg shadow text-center">
          <h3 className="font-bold text-[rgb(36,77,63)]">10</h3>
          <p>Total Friends</p>
        </div>
        <div className="h-[133px] bg-white flex items-center justify-center flex-col gap-1 rounded-lg shadow text-center">
          <h3 className="font-bold text-[rgb(36,77,63)]">3</h3>
          <p>On Track</p>
        </div>
        <div className="h-[133px] bg-white flex items-center justify-center flex-col gap-1 rounded-lg shadow text-center">
          <h3 className="font-bold text-[rgb(36,77,63)]">5</h3>
          <p>Need Attention</p>
        </div>
        <div className="h-[133px] bg-white flex items-center justify-center flex-col gap-1 rounded-lg shadow text-center">
          <h3 className="font-bold text-[rgb(36,77,63)]">4</h3>
          <p>Interactions This Month</p>
        </div>
      </div>

      <hr className="text-gray-300 mt-10" />
    </div>
  );
};

export default FriendTrackSection;
