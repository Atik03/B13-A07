import React, { useState } from "react";
import { createContext } from "react";
export const FriendContext = createContext();

function FriendContextProvider({ children }) {
  const [call, setCall] = useState([]);
  const [message, setMessage] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCall = (friendData) => {
    setCall((prevCalls) => [...prevCalls, friendData]);
    // console.log("handleCall called with friendData:", friendData);
  };

  const handleMessage = (friendData) => {
    setMessage((prevMessages) => [...prevMessages, friendData]);
    // console.log("handleMessage called with friendData:", friendData);
  };

  const handleVideo = (friendData) => {
    setVideo((prevVideos) => [...prevVideos, friendData]);
    // console.log("handleVideo called with friendData:", friendData);
  };

  const data = { call, message, video, handleCall, handleMessage, handleVideo };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
}

export default FriendContextProvider;
