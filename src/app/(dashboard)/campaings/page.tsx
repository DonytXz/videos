"use client";
import { useRouter } from "next/navigation";
import React from "react";
import proyect from "../../../../public/img/proyect.png";
import Image from "next/image";

const List = () => {
  let mockData = [
    {
      title: "Proyecto 1 - Sin título",
      date: "23/10/23",
      img: proyect,
    },
    {
      title: "Proyecto 1 - Sin título",
      date: "23/10/23",
      img: proyect,
    },
    {
      title: "Proyecto 1 - Sin título",
      date: "23/10/23",
      img: proyect,
    },
    {
      title: "Proyecto 1 - Sin título",
      date: "23/10/23",
      img: proyect,
    },
    {
      title: "Proyecto 1 - Sin título",
      date: "23/10/23",
      img: proyect,
    },
    {
      title: "Proyecto 1 - Sin título",
      date: "23/10/23",
      img: proyect,
    },
    {
      title: "Proyecto 1 - Sin título",
      date: "23/10/23",
      img: proyect,
    },
    {
      title: "Proyecto 1 - Sin título",
      date: "23/10/23",
      img: proyect,
    },
    {
      title: "Proyecto 1 - Sin título",
      date: "23/10/23",
      img: proyect,
    },
  ];
  const router = useRouter();
  return (
    <>
      <section className="w-full h-full">
        <div className="flex flex-col">
          <h1 className="text-white font-semibold text-5xl">
            Selecciona la campaña en la que quieres trabajar
          </h1>
          <div className="grid grid-cols-3 gap-6 mt-8">
            {mockData.map((item: any, index: number) => {
              return (
                <div
                  className="max-w-[465px] flex flex-col pb-4 backdrop-blur-xl backdrop-brightness-100 campaingBg rounded-b-md"
                  key={index}
                >
                  <Image
                    className=""
                    src={item.img.src}
                    alt="Hero"
                    height={258}
                    width={465}
                    priority
                  />
                  <div className="flex flex-col mx-6 mt-4">
                    <p className="text-white text-2xl font-semibold">
                      {item.title}
                    </p>
                    <p className="text-white text-xl font-medium">{item.date}</p>
                    <button
                      onClick={() => router.push("/video")}
                      className="ml-auto max-w-[166px] w-full hover:scale-105 mt-6 purpleGradient_btn rounded-full px-2 py-3 text-white text-lg font-bold"
                    >
                      Editar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default List;
