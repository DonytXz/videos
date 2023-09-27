"use client";
import DropZoneFile from "@/app/(dashboard)/components/shared/DropZoneFile";
import Sidebar from "@/app/(dashboard)/components/shared/SideBar";
import { useRouter } from "next/navigation";
import React from "react";

const registerCampaing = () => {
  const router = useRouter();
  const postData = async (event: any) => {
    // sertIsLoadding(true);
    event.preventDefault();
    // const response = await loginService({
    //   username: email,
    //   password: password,
    // });
    // console.log(response, "response login");
    // if (response) {
    //   localStorage.setItem("token", response?.data?.token);
    //   localStorage.setItem("id", response?.data?.id);
    //   router.push("/");
    // }
    router.push("/video/upload");
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/* <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite */}
            Brand Logo
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register Campaing
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User
                  </label>
                  <input
                    //   onChange={(event: any) =>
                    // setEmail(event.target.value)
                    //   }
                    // type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Campaing Name
                  </label>
                  <input
                    //   onChange={(event: any) =>
                    // setPassword(event.target.value)
                    //   }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div> */}
                  {/* <a
                        href="#"
                        className="text-sm font-medium text-white hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a> */}
                </div>
                <p className="font-bold text-lg text-white">
                  Upload CSV or Excel
                </p>
                <DropZoneFile theme={"white"} />
                <button
                  // type="submit"
                  onClick={postData}
                  className="w-full text-white bg-gray-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Register Campaing
                </button>
                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <a
                        href="#"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
                      </a>
                    </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default registerCampaing;
