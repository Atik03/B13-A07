import React from "react";
import AddFriend from "../components/AddFriend";
import FriendTrackSection from "../components/FriendTrackSection";

function HomePage() {
  return (
    <div className="w-full bg-gray-100 lg:px-[245px] ">
      <AddFriend></AddFriend>
      <FriendTrackSection></FriendTrackSection>
    </div>
  );
}

export default HomePage;
