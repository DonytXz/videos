"use client";
import Sidebar from "@/components/shared/SideBar";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const id = localStorage?.getItem("id");
  const token = localStorage?.getItem("token");
  const router = useRouter();

  //   }
  useEffect(() => {
    if (!id && !token) router.push("/auth/login");
  }, [id, token]);

  return (
    <main>
      <div className="flex bg-gray-600 text-white">
        <Sidebar />
        <div className="flex flex-col w-full h-screen">
          <div className="flex h-1/2">
            <div className="w-1/4 text-center bg-gray-300 mx-2">a</div>
            <div className="w-1/2 grow text-center bg-gray-300 mx-2">
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
            <div className="w-1/4 text-center bg-gray-300 mx-2">c</div>
          </div>
          <div className="box-border h-1/2 text-center bg-gray-300 m-2">d</div>
        </div>
      </div>
    </main>
  );
}
