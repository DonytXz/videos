"use client";
import { useRouter } from "next/navigation";
import React from "react";
import bg from "../../../../public/img/crear_cuenta_fondo_desktop.svg";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

const Register = () => {
  const router = useRouter();
  const postData = async (event: any) => {
    // sertIsLoadding(true);
    event.preventDefault();
    // const response = await LoginService({
    //   username: email,
    //   password: password,
    // });
    // // console.log(response, "response Login");
    // if (response) {
    // localStorage.setItem("token", response?.data?.token);
    // localStorage.setItem("id", response?.data?._id);
    router.push("/auth/login");
    // sertIsLoadding(false);
    // }
  };
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
        className="flex w-[calc(100%)] max-w-screen max-h-screen h-full absolute top-0 left-0 pt-20 z-0 bg-center bg-no-repeat bg-origin-border img-fix"
      >
        <section className="text-white flex  w-full h-full mx-6 md:mx-8 lg:mx-12 xl:mx-20 relative">
          <div className="my-auto flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex">
              <div className="w-full lg:w-11/12 mr-auto">
                <p className="lg:text-7xl font-normal text-3xl text-center lg:text-left lg:mb-6">
                  Regístrate ahora para empezar a crear
                </p>
                <div className="flex flex-col">
                  <input
                    className="bg-transparent border-b-2 border-gray-600 pt-4 pb-2 px-2"
                    placeholder="Email"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className="bg-transparent border-b-2 border-gray-600 pt-4 pb-2 px-2 mt-2"
                    placeholder="Contraseña"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className="bg-transparent border-b-2 border-gray-600 pt-4 pb-2 px-2 mt-2"
                    placeholder="Confirmar contraseña"
                    type="text"
                    name=""
                    id=""
                  />
                  <div className="mt-6 flex flex-col lg:flex-row items-center justify-center lg:justify-normal">
                    <div className="mx-auto lg:mx-0 w-fit mb-6 lg:mb-0">
                      <button
                        onClick={postData}
                        className={`min-w-[120px] max-w-[199px] w-full lg:min-w-[199px] hover:scale-105 purpleGradient_btn p-4 text-white font-medium text-base rounded-3xl`}
                      >
                        Crear mi cuenta
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex max-h-[286px] lg:max-h-[841px]">
              <Image
                className="z-50 mx-auto lg:mx-0 lg:absolute top-0 right-0"
                src={withBasePath("/img/register_form.svg")}
                alt="Hero"
                height={841}
                width={788}
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
