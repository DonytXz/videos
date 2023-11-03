"use client";
import { useRouter } from "next/navigation";
import React from "react";
import proyect from "../../../../public/img/campaingImg.png";
import Image from "next/image";
// import bg from "../../../../public/img/seleccionar_campaña_fondo_desktop.svg";
// import bg from "../../../../public/img/no_hay_campañas creadas_fondo_desktop.svg";
import bg from "../../../../public/img/no_hay_campañas_creadas_fondo_desktop.svg";

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
      <div
        style={{
          // backgroundImage: `url(${bg.src}), lightgray -11.817px -0.004px / 106.911% 100.008% no-repeat`,
          backgroundImage: `url(${bg.src})`,
          // filter: "gray",
          // backgroundSize: "cover",
          // backgroundRepeat: "norepeat",
          // "lightgray":  "50%",
          // cover:  "no-repeat"
          // "mix-blend-mode": "multiply"
        }}
        className="flex flex-col max-w-screen w-full min-h-screen h-full pt-20 z-0 bg-center bg-no-repeat bg-origin-border img-fix"
      >
        <section className="w-full h-full px-6 lg:px-12 xl:px-20 box-border">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
              <h1 className="text-white font-semibold text-5xl">
                Selecciona la campaña en <br />
                la que quieres trabajar
              </h1>
              <button
                onClick={() => router.push("/wizard/csv")}
                className="ml-0 mx-auto mr-0 lg:mx-0 lg:ml-auto max-w-[200px] w-full hover:scale-105 mt-6 purpleGradient_btn rounded-full p-2 text-white text-base font-medium"
              >
                Subir nuevo CSV
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
              {mockData.map((item: any, index: number) => {
                return (
                  <div
                    className="max-w-[900px] lg:max-w-[600px] flex flex-col pb-4 backdrop-blur-xl backdrop-brightness-100 comaping__box rounded-b-md"
                    key={index}
                  >
                    <Image
                      className="mx-auto"
                      src={item.img.src}
                      alt="Hero"
                      height={230}
                      width={397}
                      priority
                    />
                    <div className="flex flex-col mx-6 mt-4">
                      <p className="text-nice-green text-base font-extralight">
                        {item.date}
                      </p>
                      <p className="text-white text-2xl font-semibold">
                        {item.title}
                      </p>
                      <button
                        onClick={() => router.push("/video")}
                        className="mr-auto max-w-[200px] w-full hover:scale-105 mt-6 purpleGradient_btn rounded-full px-2 py-3 text-white text-lg font-bold"
                      >
                        Editar Proyecto
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default List;
