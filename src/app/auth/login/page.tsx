"use client";
import React, { useState } from "react";
import { loginService } from "../../../services/Auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bg from "../../../../public/img/gradient-login.svg";
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
    router.push("/wizard/register");
    sertIsLoadding(false);
    // }
  };

  return (
    <>
      <section className="login-gradient min-h-screen flex">
        <div className="flex w-full h-full my-auto">
          <div className="flex mx-auto w-1/3">
            <div className="w-10/12 m-auto flex flex-col">
              <div className="mx-auto">
                <Image
                  src="/img/logo.svg"
                  alt="Hero"
                  height={80}
                  width={246}
                  priority
                />
              </div>
              <input
                className="mt-6 bg-transparent border-2 px-4 py-3 border-white rounded-full"
                type="text"
                placeholder="Usuario/Correo"
              />
              <input
                className="mt-4 bg-transparent border-2 px-4 py-3 border-white rounded-full"
                type="text"
                placeholder="Contraseña"
              />
              <button onClick={postData} className="hover:scale-105 mt-6 purpleGradient_btn rounded-full px-2 py-3 text-white">
                Inglesar
              </button>
              <p className="text-white mt-4 text-center font-bold text-base">
              Si no tienes una cuenta,
                <span className="text-green-dark cursor-pointer hover:text-green-600"> regístrate aquí.</span>
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
            className="text-white w-2/3 min-h-screen bg-center bg-no-repeat bg-origin-border img-fix"
          >
            <div className="flex w-full h-full justify-evenly relative">
              <div className="flex flex-col items-center w-2/3">
                <div className="h-2/3 w-full">
                  <div
                    className="rounded-b-3xl bg-no-repeat w-10/12 h-full mx-auto max-w-[604px]"
                    style={{
                      backgroundImage: `url(${phone.src})`,
                    }}
                  ></div>
                </div>
                <div className=" w-full h-1/3 flex">
                  <p className="text-white bg-white/20 backdrop-blur-3xl text-6xl font-normal px-4 py-6 w-10/12 m-auto max-w-[604px]">
                    Crea videos personalizados con ayuda de la IA
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-1/3 h-screen min-h-screen pt-8">
                <div
                  className="h-1/2 w-full  bg-no-repeat  max-w-[350px] mb-4 rounded-3xl"
                  style={{
                    backgroundImage: `url(${phone2.src})`,
                  }}
                ></div>

                <div
                  className="h-1/2 w-full  bg-no-repeat  max-w-[403px] ml-auto mt-4"
                  style={{
                    backgroundImage: `url(${guy.src})`,
                  }}
                >
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
