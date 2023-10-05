import React from "react";

const VideoColumn = ({ time, columns, index }: any) => {
  return (
    <>
      <div className="flex flex-row my-2 px-6 py-2">
        <div className={`flex flex-col mr-2 text-blue-600 ${index == 1 ? "text-white" : ""} cursor-pointer `}>
          <div className="">{time.start}</div>
          <div className="pt-2">{time.end}</div>
        </div>
        <div className="flex flex-col">
          <div className="">{columns.start}</div>
          <div className="pt-2">{columns.end}</div>
        </div>
      </div>
    </>
  );
};

export default VideoColumn;
