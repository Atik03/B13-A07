import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { IoCall } from "react-icons/io5";
import { BiMessageDots } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { IoArchiveSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { FriendContext } from "../context/FriendContext";

function FriendDetails() {
  const { id: friendId } = useParams();
  const friendData = useLoaderData();

  const expectedFriend = friendData.find(
    (friend) => friend.id === Number(friendId),
  );

  const { call, message, video, handleCall, handleMessage, handleVideo } =
    useContext(FriendContext);

  const {
    id,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedFriend;

  return (
    <div className="w-full h-auto bg-gray-100 ">
      <div className="w-full bg-gray-100 container mx-auto px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 grid gap-4">
            <div className="bg-white rounded-2xl shadow p-2 text-center grid gap-1">
              <img
                src={picture}
                alt={name}
                className="w-20 h-20 mx-auto rounded-full"
              />

              <h2 className="text-md font-semibold text-gray-800">{name}</h2>

              <div className="flex flex-col items-center justify-center gap-1">
                <div
                  className={`badge badge-sm ${
                    status === "On-Track"
                      ? "badge-success"
                      : status === "Almost Due"
                        ? "badge-warning"
                        : "badge-error"
                  }`}
                >
                  {status}
                </div>

                <div className="flex gap-2 text-black">
                  {tags.map((tag, index) => (
                    <div key={index} className=" badge bg-green-200 badge-sm">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-500 italic">{bio}</p>

              <p className="text-sm text-gray-400">Preferred: {email}</p>
            </div>

            <div className="grid gap-3">
              <button className="bg-white shadow rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-gray-50">
                <FaBell />
                <span>Snooze 2 Weeks</span>
              </button>

              <button className="bg-white shadow rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-gray-50">
                <IoArchiveSharp />
                <span>Archive</span>
              </button>

              <button className="bg-white shadow rounded-xl p-3 flex items-center justify-center gap-2 text-red-500 hover:bg-red-50">
                <MdDeleteForever />
                <span>Delete</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-3 grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white shadow rounded-xl p-4 grid gap-1 text-center">
                <h3 className="text-2xl font-semibold">{days_since_contact}</h3>
                <p className="text-sm text-gray-500">Days Since Contact</p>
              </div>

              <div className="bg-white shadow rounded-xl p-4 grid gap-1 text-center">
                <h3 className="text-2xl font-semibold">{goal}</h3>
                <p className="text-sm text-gray-500">Goal (Days)</p>
              </div>

              <div className="bg-white shadow rounded-xl p-4 grid gap-1 text-center">
                <h3 className="text-lg font-semibold">{next_due_date}</h3>
                <p className="text-sm text-gray-500">Next Due</p>
              </div>
            </div>

            <div className="bg-white shadow rounded-xl p-4 grid sm:grid-cols-2 items-center gap-3">
              <div className="grid gap-1">
                <p className="text-sm text-gray-500">Relationship Goal</p>
                <p className="text-gray-800 font-medium">
                  Connect every
                  <span className="font-semibold"> {goal} days</span>
                </p>
              </div>

              <button className="justify-self-start sm:justify-self-end bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                Edit
              </button>
            </div>

            <div className="bg-white shadow rounded-xl p-4 grid gap-4">
              <p className="font-medium text-gray-700">Quick Check-In</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => handleCall(expectedFriend)}
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg py-6 flex flex-col items-center justify-center gap-1"
                >
                  <span className="text-xl">
                    <IoCall className="text-4xl" />
                  </span>
                  <span className="text-xl">Call</span>
                </button>

                <button
                  onClick={() => handleMessage(expectedFriend)}
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg py-6 flex flex-col items-center justify-center gap-1"
                >
                  <BiMessageDots className="text-4xl" />
                  <span className="text-xl">Text</span>
                </button>

                <button
                  onClick={() => handleVideo(expectedFriend)}
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg py-6 flex flex-col items-center justify-center  gap-1"
                >
                  <LuVideo className="text-4xl" />
                  <span className="text-xl">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendDetails;
