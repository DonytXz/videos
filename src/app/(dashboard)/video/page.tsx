"use client";
import Sidebar from "@/app/(dashboard)/components/shared/SideBar";
import TimelineEditor from "@/app/(dashboard)/components/video/TimelineEditor";
import VideoColumns from "@/app/(dashboard)/components/video/VideoColumns";
import { TimelineEffect, TimelineRow } from "@xzdarcy/react-timeline-editor";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const videoMarkers = () => {
  let id: any;
  let token: any;

  if (typeof window !== "undefined") {
    id = localStorage?.getItem("id");
    token = localStorage?.getItem("token");
  }
  const router = useRouter();

  const videoDataMock = [
    {
      time: {
        start: "0:58",
        end: "1:25",
      },
      columns: {
        start: "Lorem ipsum dolor sit amet consectetur.",
        end: "Lorem ipsum dolor sit amet consectetur.",
      },
    },
    {
      time: {
        start: "1:55",
        end: "2:15",
      },
      columns: {
        start: "Lorem ipsum dolor sit amet consectetur.",
        end: "Lorem ipsum dolor sit amet consectetur.",
      },
    },
    {
      time: {
        start: "3:22",
        end: "3:30",
      },
      columns: {
        start: "Lorem ipsum dolor sit amet consectetur.",
        end: "Lorem ipsum dolor sit amet consectetur.",
      },
    },
    {
      time: {
        start: "5:52",
        end: "6:00",
      },
      columns: {
        start: "Lorem ipsum dolor sit amet consectetur.",
        end: "Lorem ipsum dolor sit amet consectetur.",
      },
    },
  ];

  useEffect(() => {
    if (!id && !token) router.push("/auth/login");
  }, [id, token]);

  const mockData: TimelineRow[] = [
    {
      id: "0",
      actions: [
        {
          id: "action00",
          start: 0,
          end: 2,
          effectId: "effect0",
        },
      ],
    },
    {
      id: "1",
      actions: [
        {
          id: "action10",
          start: 1.5,
          end: 5,
          effectId: "effect1",
        },
      ],
    },
  ];
  // const defaultEditorData: any = cloneDeep(mockData);
  // const [data, setData] = useState(defaultEditorData);

  const mockEffect: Record<string, TimelineEffect> = {
    effect0: {
      id: "effect0",
      name: "sadsadsad",
    },
    effect1: {
      id: "effect1",
      name: "sadsadsa",
    },
  };
  return (
    <>
      <div className="flex h-1/2">
        {/* <div className="w-1/4 bg-gray-300 mx-2"> */}
        <div className="w-1/2 mr-2 bg-gray-200">
          <VideoColumns videoDataArr={videoDataMock} />
        </div>
        {/* <div className="w-1/2 grow mx-2"> */}
        <div className=" grow mr-2">
          <iframe
            className="w-full h-full"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/NpEaa2P7qZI?si=E3VARidlc8XRbFy0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* <div className="w-1/4 bg-gray-300 mx-2">
            <VideoResources />
          </div> */}
      </div>
      <div className="box-border  h-1/2  m-2">
        {/* <Timeline editorData={[]} effects={{}} /> */}
        {/* <Timeline
            onChange={setData}
            editorData={data}
            effects={mockEffect}
          /> */}
        <TimelineEditor />
      </div>
    </>
  );
};

export default videoMarkers;
