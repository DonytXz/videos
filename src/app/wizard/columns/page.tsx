"use client";
import { useRouter } from "next/navigation";
import React from "react";
import bg from "../../../../public/img/elegir_columnas_fondo_desktop.svg";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

const Columns = () => {
  const router = useRouter();
  let mock = [
    {
      name: "Perfil",
      example: "Editor de Naturaleza",
    },
    {
      name: "Canal",
      example: "Fauna Viva",
    },
    {
      name: "Correo electrónico",
      example: "editor@faunaviva.demo",
    },
    {
      name: "Tema",
      example: "Especial Reptiles",
    },
  ];
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
        <div className="flex flex-col w-full px-6 lg:px-12 lg:mt-16 xl:px-20 xl:mt-20 box-border">
          <div className="pt-1 box-border w-full">
            <h1 className="text-white font-medium text-6xl text-center">
              Columnas encontradas
            </h1>
            <h2 className="text-white mt-4 text-3xl font-light text-center">
              Asigna{" "}
              {/* <span className="text-white cursor-pointer font-bold text-3xl"> */}
              3 columnas al mensaje y 1 como dato de contacto.
              {/* </span> */}
            </h2>
            <div className="flex flex-col mt-10">
              {mock.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row px-4 py-6 my-2 rounded-3xl justify-between items-center column_found
                    ${
                      ""
                      // index == 0 ? "bg-black-light" : "bg-black-dark"
                    }
                    `}
                  >
                    <div className="w-full flex flex-col lg:flex-row ml-0 lg:ml-8 lg:w-fit">
                      <div className="flex flex-col lg:flex-row items-center w-full">
                        <div className="upload__buttonInc flex w-12 h-12 rounded-full mr-0 lg:mr-4">
                          <Image
                            className="z-50 m-auto"
                            src={withBasePath("/img/icon/database.svg")}
                            alt="Hero"
                            height={16}
                            width={15}
                            priority
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-white text-3xl mt-2 lg:mt-0 font-medium text-center lg:text-left">
                            {item.name}
                          </p>
                          <p className="text-white/60 font-light mt-2 lg:mt-0 text-lg text-center lg:text-left">Ejemplo: {item.example}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row mr-0 lg:mr-8 items-center lg:w-fit ml-0 lg:ml-auto">
                      <p className="text-white mt-2 lg:mt-0 mr-0 lg:mr-4 text-2xl font-light text-center lg:text-left">
                        Selecciona:
                      </p>
                      <button
                        className={`${
                          index == 2
                            ? "opacity-30 cursor-default hover:scale-100"
                            : ""
                        } max-w-[166px] mt-2 lg:mt-0 mr-0 lg:mr-4 w-full hover:scale-105 purpleGradient_btn rounded-full px-4 py-2 text-white text-lg font-bold`}
                      >
                        Personalizar
                      </button>
                      <button
                        className={`${
                          index !== 2
                            ? "opacity-30 cursor-default hover:scale-100"
                            : ""
                        } min-w-[120px] max-w-[166px] mt-2 lg:mt-0 w-full hover:scale-105 purpleGradient_btn rounded-full px-4 py-2 text-white font-bold text-base`}
                      >
                        Contacto
                      </button>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={() => router.push("/video")}
                className="mx-auto mb-8 max-w-[336px] w-full hover:scale-105 mt-6 purpleGradient_btn rounded-full px-2 py-3 text-white text-lg font-bold"
              >
                Crear vista previa del video →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Columns;
