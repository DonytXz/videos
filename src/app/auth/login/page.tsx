"use client";
import React, { useState } from "react";
import { loginService } from "../../../services/Auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bg from "../../../../public/img/fondo_login_desktop.svg";
import phone from "../../../../public/img/phone.png";
import phone2 from "../../../../public/img/phone2.png";
import guy from "../../../../public/img/guy.png";

const Login = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [isLoadding, sertIsLoadding] = useState(false);
  const router = useRouter();

  const postData = async (event: any) => {
    sertIsLoadding(true);
    event.preventDefault();
    // const response = await LoginService({
    //   username: email,
    //   password: password,
    // });
    // // console.log(response, "response Login");
    // if (response) {
    // localStorage.setItem("token", response?.data?.token);
    // localStorage.setItem("id", response?.data?._id);
    router.push("/wizard/csv");
    sertIsLoadding(false);
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
        <section className="text-white flex  w-full h-full mx-6 md:mx-8 lg:mx-12 xl:mx-20">
          <div className="my-auto flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <p className="lg:text-7xl font-normal text-3xl text-center">
                Crea videos personalizados con ayuda de la IA
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex">
              <div className="bg-transparent-black m-auto px-8 max-w-[788px] w-10/12 py-16 rounded-3xl">
                <div className="flex flex-col">
                  <p className="font-normal lg:text-5xl mb-6 text-2xl text-center lg:text-left">
                    Inicia sesión
                  </p>
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
                  <div className="mt-6 flex flex-col lg:flex-row items-center justify-center lg:justify-normal">
                    <div className="mx-auto lg:mx-0 w-fit mb-6 lg:mb-0">
                      <button
                        onClick={postData}
                        className={`min-w-[120px] max-w-[199px] w-full lg:min-w-[199px] hover:scale-105 purpleGradient_btn p-4 text-white font-medium text-base rounded-3xl`}
                      >
                        Ingresar
                      </button>
                    </div>
                    <h2 onClick={() => router.push("/auth/register")} className="text-white my-auto font-normal text-base mx-auto lg:mx-0 lg:ml-auto  text-center lg:text-left">
                      Si no tienes una cuenta,{" "}
                      <span className="text-green-dark cursor-pointer hover:text-green-600 font-bold">
                        regístrate aquí.
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
