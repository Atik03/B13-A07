import React, { useContext, useState } from "react";
import { IoCall } from "react-icons/io5";
import { BiMessageDots } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { FriendContext } from "../context/FriendContext";
import { IoMdArrowDropdown } from "react-icons/io";

const Timeline = () => {
  const { call, message, video } = useContext(FriendContext);
  const [filter, setFilter] = useState("All");

  const allData = [
    ...call.map((item) => ({ ...item, type: "Call" })),
    ...message.map((item) => ({ ...item, type: "Message" })),
    ...video.map((item) => ({ ...item, type: "Video" })),
  ];

  const filteredData = allData.filter(
    (item) => filter === "All" || item.type === filter,
  );

  return (
    <div className="w-full bg-gray-100 py-10 px-5 lg:px-[230px]">
      <div className="container mx-auto">
        <h2 className="font-bold text-3xl mb-8">Timeline</h2>

        <div className="dropdown w-full mb-6">
          <div
            tabIndex={0}
            role="button"
            className="btn w-[200px] justify-between"
          >
            {filter}
            <span>
              <IoMdArrowDropdown className="text-2xl" />
            </span>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box w-[200px] mt-2 p-2 shadow"
          >
            <li>
              <a onClick={() => setFilter("All")}>All</a>
            </li>
            <li>
              <a onClick={() => setFilter("Call")}>Call</a>
            </li>
            <li>
              <a onClick={() => setFilter("Message")}>Message</a>
            </li>
            <li>
              <a onClick={() => setFilter("Video")}>Video</a>
            </li>
          </ul>
        </div>

        {filteredData.length === 0 ? (
          <div className="w-full text-center pt-20 pb-20">
            <p className="text-xl md:text-5xl font-bold">
              No Activities To Timeline
            </p>
          </div>
        ) : (
          <div className="grid gap-5">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="flex w-full h-[80px] bg-white rounded"
              >
                <div className="h-full w-20 flex items-center justify-center rounded-l">
                  {item.type === "Call" && <IoCall className="text-4xl" />}
                  {item.type === "Message" && (
                    <BiMessageDots className="text-4xl" />
                  )}
                  {item.type === "Video" && <LuVideo className="text-4xl" />}
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl">{item.type}</p>
                    <p>{item.name}</p>
                  </div>

                  <p>
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
