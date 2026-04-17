import AddFriend from "../components/AddFriend";
import AllFriends from "../components/AllFriends";
import FriendTrackSection from "../components/FriendTrackSection";
import { Suspense } from "react";

const allFriendsPromise = fetch("/peopleData.json").then((res) => res.json());

function HomePage() {
  return (
    <div className="w-full bg-gray-100 lg:px-[100px] ">
      <AddFriend></AddFriend>
      <FriendTrackSection></FriendTrackSection>

      <Suspense
        fallback={
          <div className="w-full text-center">
            <h2>Loading...</h2>
          </div>
        }
      >
        <AllFriends allFriendsPromise={allFriendsPromise} />
      </Suspense>
    </div>
  );
}

export default HomePage;
