import React from "react";
import { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { FriendContext } from "../context/FriendContext";

const Stats = () => {
  const { call, message, video } = useContext(FriendContext);

  const callLength = call.length;
  const messageLength = message.length;
  const videoLength = video.length;

  const data = [
    { name: "Text", value: callLength },
    { name: "Call", value: messageLength },
    { name: "Video", value: videoLength },
  ];

  const COLORS = ["#7C3AED", "#14532D", "#22C55E"];

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="flex justify-center gap-4 mt-4">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="text-gray-700">{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full bg-gray-100 lg:px-[100px] py-6">
      <div className="container mx-auto px-5">
        <h2 className="text-2xl font-bold mb-5">Friendship Analytics</h2>

        <div className="bg-gray-50 p-5 rounded-xl shadow-sm w-full">
          <p className="text-gray-600 mb-3">By Interaction Type</p>
          <div className="flex justify-center">
            <div>
              <PieChart width={300} height={300}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend content={renderLegend} />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
