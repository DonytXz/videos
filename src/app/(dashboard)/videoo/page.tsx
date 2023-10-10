"use client";
import Sidebar from "@/app/(dashboard)/components/shared/SideBar";
import TimelineEditor from "@/app/(dashboard)/components/video/TimelineEditor";
import VideoColumns from "@/app/(dashboard)/components/video/VideoColumns";
import { TimelineEffect, TimelineRow } from "@xzdarcy/react-timeline-editor";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
import { IconArrowBigLeftFilled } from "@tabler/icons-react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Videoo = ({ onStart, setOpen }: any) => {
  // let id: any;
  // let token: any;
  const [playV, setPlayV]: any = useState(null);
  // const [open, setOpen] = useState(false);

  // if (typeof window !== "undefined") {
  //   id = localStorage?.getItem("id");
  //   token = localStorage?.getItem("token");
  // }
  const router = useRouter();

  const videoDataMock = [
    {
      time: {
        start: "0:58",
        end: "1:25",
      },
      columns: {
        start: "Saludo Usuario.",
        end: "Nombre empresa.",
      },
    },
    {
      time: {
        start: "1:55",
        end: "2:15",
      },
      columns: {
        start: "Nombre de producto.",
        end: "Nombre de producto.",
      },
    },
    {
      time: {
        start: "3:22",
        end: "3:30",
      },
      columns: {
        start: "Despedida.",
        end: "Despedida.",
      },
    },
    {
      time: {
        start: "5:52",
        end: "6:00",
      },
      columns: {
        start: "Pagina web.",
        end: "Pagina web.",
      },
    },
  ];

  // useEffect(() => {
  //   if (!id && !token) router.push("/auth/login");
  // }, [id, token]);

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
  const timelineState = useRef<any>();

  const onStartVideo = () => {
    // timelineState.current.play();
    setPlayV(true);
  };
  const onPauseVideo = () => {
    // timelineState.current.pause();
    setPlayV(false);
  };
  // useEffect(() => {
  //   // if (!timelineState.current) return;
  //   //   timelineState.current.pause();
  //   //   timelineState.current.listener.offAll();
  //   //   lottieControl.destroy();
  //   // };
  //   console.log("adsa", playV)
  // }, [playV])

  return (
    <>
      <div className="flex h-full">
        {/* <div className="w-1/4 bg-gray-300 mx-2"> */}
        <section className="px-8">
          <div className="flex flex-col rounded-md border border-slate-400 my-4 px-4 h-[calc(100%-32px)]">
            <button
              className="ml-8 mt-8 text-white flex flex-row cursor-pointer"
              onClick={() => router.push("/campaings")}
            >
              <IconArrowBigLeftFilled color="white" />
              <p className="ml-4 font-semibold text-lg">Lista de campañas</p>
            </button>
            <div className="">
              <VideoColumns videoDataArr={videoDataMock} />
              {/* <Column /> */}
            </div>
          </div>
        </section>

        {/* <div className="w-1/2 grow mx-2"> */}
        <div className="grow">
          {/* <iframe
            className="w-full h-full"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/NpEaa2P7qZI?si=E3VARidlc8XRbFy0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
          <ReactPlayer
            // onClick={() => setPlayV(!playV)}
            // onPause={onPauseVideo}
            // onStart={onStartVideo}
            controls={true}
            onPlay={() => setPlayV(true)}
            onPause={() => setPlayV(false)}
            onEnded={() => setPlayV(false)}
            playing={playV}
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          />
        </div>
        {/* <div className="w-1/4 bg-gray-300 mx-2">
            <VideoResources />
          </div> */}
      </div>
      <div className="box-border">
        {/* <Timeline editorData={[]} effects={{}} /> */}
        {/* <Timeline
            onChange={setData}
            editorData={data}
            effects={mockEffect}
          /> */}
        <TimelineEditor
          timelineState={timelineState}
          setPlayV={setPlayV}
          playV={playV}
        />
      </div>
    </>
  );
};

export default Videoo;
