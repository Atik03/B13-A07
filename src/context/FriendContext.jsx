import React, { useState } from "react";
import { createContext } from "react";
export const FriendContext = createContext();
import { toast } from "react-toastify";

function FriendContextProvider({ children }) {
  const [call, setCall] = useState([]);
  const [message, setMessage] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCall = (friendData) => {
    setCall((prevCalls) => [...prevCalls, friendData]);
    toast.success(`Call with ${friendData.name}`);
  };

  const handleMessage = (friendData) => {
    setMessage((prevMessages) => [...prevMessages, friendData]);
    toast.info(`Text with ${friendData.name}`);
  };

  const handleVideo = (friendData) => {
    setVideo((prevVideos) => [...prevVideos, friendData]);
    toast.warn(`Video with ${friendData.name}`);
  };

  const data = { call, message, video, handleCall, handleMessage, handleVideo };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
}

export default FriendContextProvider;
