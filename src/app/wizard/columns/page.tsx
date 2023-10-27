"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Columns = () => {
  const router = useRouter();
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
  return (
    <>
      <div className="flex flex-col w-full mx-6 mt-8 md:mx-8 md:mt-12 lg:mx-12 lg:mt-16 xl:mx-20 xl:mt-20">
        <div className="pt-1">
          <h1 className="text-white font-semibold text-5xl pt-8">
            Columnas encontradas
          </h1>
          <h2 className="text-white mt-4 font-normal text-xl">
            Selecciona{" "}
            <span className="text-green-dark cursor-pointer hover:text-green-600 font-bold text-3xl">
              2 para personalizar el video y 2 para contacto.
            </span>
          </h2>
          <div className="flex flex-col mt-10">
            {mock.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`flex px-4 py-6 my-2 rounded-3xl justify-between items-center ${
                    index == 0 ? "bg-black-light" : "bg-black-dark"
                  }`}
                >
                  <div className="flex flex-col ml-8">
                    <p className="text-white text-2xl font-semibold">
                      {item.name}
                    </p>
                    <p className="text-white font-medium text-base">{`Columna ${
                      index + 1
                    }`}</p>
                  </div>
                  <div className="flex mr-8 items-center">
                    <p className="text-white mr-4 text-2xl font-semibold">
                      Selecciona:
                    </p>
                    <button
                      className={`${
                        index == 2 || index == 3
                          ? "opacity-50 cursor-default hover:scale-100"
                          : ""
                      } max-w-[166px] mr-4 w-full hover:scale-105 purpleGradient_btn rounded-full px-4 py-2 text-white text-lg font-bold`}
                    >
                      Personalizar
                    </button>
                    <button
                      className={`${
                        index == 0 || index == 1
                          ? "opacity-50 cursor-default hover:scale-100"
                          : ""
                      } min-w-[120px] max-w-[166px] w-full hover:scale-105 purpleGradient_btn rounded-full px-4 py-2 text-white font-bold text-base`}
                    >
                      Contacto
                    </button>
                  </div>
                </div>
              );
            })}
            <button
              onClick={() => router.push("/video")}
              className="mx-auto max-w-[336px] w-full hover:scale-105 mt-6 purpleGradient_btn rounded-full px-2 py-3 text-white text-lg font-bold"
            >
              Personaliza tu video
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Columns;
