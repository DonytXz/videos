import React, { useState } from "react";
import VideoColumn from "./videoColumns/VideoColumn";

const VideoColumns = ({ videoDataArr, setTab, tab }: any) => {
  return (
    <>
      <div className="w-full flex flex-col py-4 px-2">

        <div className="flex w-full m-2 p-2">
          <p className={`text-left font-semibold mr-2 text-white`}>Tiempo</p>
          <p className={`text-left font-semibold text-white`}>Descripción</p>
        </div>
        {videoDataArr.map((element: any, index: number) => {
          return (
            <div
              className={`rounded-md border border-slate-400 my-2 px-6 py-4
                ${
                  index == 1
                    ? "border-white border-l-4  bg-medium-green text-white"
                    : "text-gray-300"
                }
              `}
              key={index}
            >
              <VideoColumn
                key={index}
                index={index}
                time={element.time}
                columns={element.columns}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoColumns;
