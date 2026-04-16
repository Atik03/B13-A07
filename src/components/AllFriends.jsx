import React from "react";
import { use } from "react";

const AllFriends = ({ allFriendsPromise }) => {
  const allFriendsData = use(allFriendsPromise);

  return (
    <div className="w-full container mx-auto mt-6">
      <h2 className="text-2xl font-bold">Your Friends</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 ">
        {allFriendsData.map((friend) => {
          return (
            <div className="card bg-base-100 shadow-sm">
              <figure className="w-full mt-4">
                <img
                  className="w-25 h-25 rounded-full"
                  src={friend.picture}
                  alt={friend.name}
                />
              </figure>
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{friend.name}</h2>

                <p>{friend.days_since_contact}d ago</p>

                <div className="card-actions flex flex-col items-center">
                  <div className="flex gap-2 text-black">
                    {" "}
                    {friend.tags.map((tag, index) => (
                      <div key={index} className=" badge bg-green-200 badge-sm">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <div
                    className={`badge badge-sm ${
                      friend.status === "On-Track"
                        ? "badge-success"
                        : friend.status === "Almost Due"
                          ? "badge-warning"
                          : "badge-error"
                    }`}
                  >
                    {friend.status}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllFriends;
