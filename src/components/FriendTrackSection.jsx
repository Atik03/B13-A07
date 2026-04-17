import React from "react";
import { useEffect, useState } from "react";

const FriendTrackSection = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("/peopleData.json")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  const peopleLength = people.length;
  const onTrackLength = people.filter((p) => p.status === "On-Track").length;

  return (
    <div className="w-full container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        <div className="h-[133px] bg-white flex items-center justify-center flex-col gap-1 rounded-lg shadow text-center">
          <h3 className="font-bold text-[rgb(36,77,63)]">{peopleLength}</h3>
          <p>Total Friends</p>
        </div>
        <div className="h-[133px] bg-white flex items-center justify-center flex-col gap-1 rounded-lg shadow text-center">
          <h3 className="font-bold text-[rgb(36,77,63)]">{onTrackLength}</h3>
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
