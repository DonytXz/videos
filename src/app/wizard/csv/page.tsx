"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../../../../public/img/csv_fondo_desktop.svg";

const UploadCSV = () => {
  const router = useRouter();
  // const [files, setFiles]: any = useState(null);
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });
  const files = acceptedFiles.map((file: any) => (
    <div className="mr-auto" key={file.path}>
      <p className="text-white text-xl font-semibold mt-4">Archivos subidos</p>
      <li className="text-white font-medium text-lg mt-2">
        {file.path} - {file.size} bytes
      </li>
    </div>
  ));
  const resolveWithSomeData = new Promise((resolve) =>
    setTimeout(() => {
      resolve("9");
    }, 3000)
  );

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      toast
        .promise(resolveWithSomeData, {
          pending: {
            position: toast.POSITION.TOP_RIGHT,
            theme: "light",
            render() {
              return "Procesando columnas";
            },
            icon: false,
          },
          success: {
            position: toast.POSITION.TOP_RIGHT,
            theme: "light",
            render({ data }) {
              return `Listo, ${data} columnas detectadas.`;
            },
            // other options
            icon: "🟢",
          },
          error: {
            position: toast.POSITION.TOP_RIGHT,
            theme: "light",
            render({ data }) {
              // When the promise reject, data will contains the error
              return <div>Error</div>;
            },
          },
        })
        .then(() => {
          setTimeout(() => {
            // resolve("9");
            router.push("/wizard/columns");
          }, 5000);
        });
    }
  }, [files]);

  return (
    <>
      {/* <div className="flex relative w-screen h-screen"> */}
      {/* <Sidebar /> */}
      {/* <div className="flex flex-col w-[calc(100%-48px)] max-w-s max-h-screen mx-6 mt-8 md:mx-8 md:mt-12 lg:mx-12 lg:mt-16 xl:mx-20 xl:mt-20"> */}
      {/* <div className="flex flex-col w-full max-h-screen ml-12 mt-20"> */}

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
        {/* <div className="mx-auto lg:mx-0 lg:mr-auto md:ml-8 lg:ml-12 xl:ml-20"> */}
        <h1 className="text-white text-center lg:text-left z-50 font-semibold text-5xl ml-6 md:ml-8 lg:ml-12 xl:ml-20">
          Sube tu propio CSV
        </h1>
        {/* </div> */}
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-0 my-auto items-center justify-center mx-6 md:mx-8 lg:mx-12 xl:mx-20 box-border">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            // rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="w-full mx-auto lg:w-1/2 h-full">
            <div className="flex my-auto items-center lg:mr-auto">
              <div className="flex bg-nice-black rounded-3xl py-12 px-8 max-w-[626px] w-full lg:w-10/12  mx-auto lg:mx-0 flex-col font-semibold text-5xl items-left h-full my-auto items-center justify-center">
                <div className="upload__buttonInc flex w-28 h-28 rounded-full">
                  <Image
                    className="z-50 m-auto"
                    src="/img/icon/upload.svg"
                    alt="Hero"
                    height={43}
                    width={43}
                    priority
                  />
                </div>
                <h1 className="text-white text-center mt-4">Subir CSV</h1>

                <button
                  onClick={() => open()}
                  // onClick={postData}
                  className="max-w-[232px] w-full hover:scale-105 mt-6 purpleGradient_btn rounded-full px-2 py-3 text-white text-lg font-bold"
                >
                  Elegir archivo
                </button>
                {files}
                {/* <Link
                className="text-white font-medium text-lg mt-4 border-2 border-gray-400 p-4"
                href={"/wizard/columns"}
              >
                Continuar
              </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col items-center border-l-0 border-t lg:border-t-0 lg:border-l mt-8 lg:mt-0 border-gray-400 z-50 py-12">
            <div className="flex flex-col mb-6">
              <div className="upload__buttonInc flex w-28 h-28 rounded-full mx-auto">
                <Image
                  className="z-50 m-auto"
                  src="/img/icon/upload.svg"
                  alt="Hero"
                  height={43}
                  width={43}
                  priority
                />
              </div>
              <p className="w-10/12 mx-auto text-3xl font-medium text-white text-center mt-4">
                Si necesitas más ayuda, consulta la base de datos de ejemplo y
                el video de aprendizaje
              </p>
            </div>
            <div className="flex bg-nice-black rounded-3xl py-12 px-8 max-w-[626px] w-full lg:w-10/12 mx-auto flex-col font-semibold text-5xl items-left h-full my-auto items-center justify-center">
              <Image
                className="z-50 m-auto"
                src="/img/csv_img.png"
                alt="Hero"
                height={304}
                width={561}
                priority
              />

              <button
                onClick={() => open()}
                // onClick={postData}
                className="max-w-[285px] w-full hover:scale-105 mt-6 purpleGradient_btn rounded-full px-2 py-3 text-white text-lg font-bold"
              >
                Base de datos de aprendizaje
              </button>

              {/* <Link
                className="text-white font-medium text-lg mt-4 border-2 border-gray-400 p-4"
                href={"/wizard/columns"}
              >
                Continuar
              </Link> */}
            </div>
            {/* <div className="ml-auto">
                  <Image
                    className=""
                    src="/img/video.png"
                    alt="Hero"
                    height={383}
                    width={629}
                    priority
                  />
                  <p className="text-white text-center text-5xl font-semibold mt-4 ">
                    Video de aprendizaje
                  </p>
                </div> */}
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
      {/* </div> */}
    </>
  );
};

export default UploadCSV;
