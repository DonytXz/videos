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

const VideoMarkers = ({ onStart, setOpen }: any) => {
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

  let mock = [
    {
      name: "ID",
    },
    {
      name: "Nombre",
    },
    {
      name: "Correo Electronico",
    },
    {
      name: "Numero Telefonico",
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

  const [tab, setTab] = useState(0);
  const names = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque deserunt unde eligendi!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum est laborum sapiente nisi amet provident sed, porro ut, alias odit iste cumque molestias vitae perferendis similique natus quisquam. Natus a voluptatum nesciunt. Quos inventore ad hic totam, ipsa fugiat. Magnam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt dicta quas sunt corporis reprehenderit quia dignissimos error. Quam, iste!",
  ];
  const [currenTxt, setCurrentTxt] = useState(names[0]);
  function setRandomTxt() {
    const index = Math.floor(Math.random() * names.length);
    let newName = names[index];
    if (newName == currenTxt) {
      setRandomTxt();
    } else {
      setCurrentTxt(newName);
    }
    return;
  }
  useEffect(() => {
    setTimeout(() => {
      if (playV) setRandomTxt();
    }, 9000);
  }, [currenTxt, playV]);
  return (
    <>
      <div className="flex flex-col lg:flex-row h-full">
        {/* <div className="w-1/4 bg-gray-300 mx-2"> */}
        <section className="px-8 py-8 order-2 lg:order-2">
          <div className="bg-black p-8 w-full mx-auto  min-w-[350px] h-full">
            <button
              className="mx-auto mb-8 text-white flex flex-row cursor-pointer hover:scale-105"
              onClick={() => router.push("/campaings")}
            >
              <IconArrowBigLeftFilled color="white" />
              <p className="ml-4 font-semibold text-lg">Mis campañas</p>
            </button>
            <p className="text-white text-2xl font-medium text-center">
              Columnas
            </p>
            {mock.map((item: any, index: number) => {
              return (
                <div key={index}>
                  {" "}
                  <div
                    // onClick={() => router.push("/video")}
                    className="mx-auto mb-4 max-w-[334px] w-full hover:scale-105 mt-6 purpleGradient_btn rounded-full p-4 text-center text-white text-base font-light"
                  >
                    Personaliza tu video
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="flex flex-col rounded-md border border-slate-400 my-4 px-4 h-[calc(100%-32px)]">
            <button
              className="ml-8 mt-8 text-white flex flex-row cursor-pointer hover:scale-105"
              onClick={() => router.push("/campaings")}
            >
              <IconArrowBigLeftFilled color="white" />
              <p className="ml-4 font-semibold text-lg">Lista de campañas</p>
            </button>
            <div className="flex mt-4">
              <p
                onClick={() => setTab(0)}
                className={`${
                  tab == 0
                    ? "bg-white text-black border-gray-600"
                    : "text-white border-white "
                } text-left mr-auto p-3 m-2 font-bold text-xl border cursor-pointer hover:scale-105`}
              >
                Transcripción
              </p>
              <p
                onClick={() => setTab(1)}
                className={`${
                  tab == 1
                    ? "bg-white text-black border-gray-600"
                    : "text-white border-white "
                } tex-left mr-auto p-3 m-2 font-bold text-xl border cursor-pointer hover:scale-105`}
              >
                Columnas
              </p>
            </div>
            <div className="flex w-full h-full">
              {tab == 0 && (
                <textarea
                  value={currenTxt}
                  id="message"
                  readOnly={true}
                  rows={currenTxt.length * 0.05}
                  className="my-auto block p-2.5 w-full text-gray-900 text-2xl bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={currenTxt}
                ></textarea>
              )}
              {tab == 1 && (
                <VideoColumns
                  tab={tab}
                  setTab={setTab}
                  videoDataArr={videoDataMock}
                />
              )}
            </div>
          </div> */}
          {/* <Column /> */}
        </section>

        {/* <div className="w-1/2 grow mx-2"> */}
        <div className="grow order-1 lg:order-2 min-h-[250px]">
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

export default VideoMarkers;
