"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <div className="flex w-full my-auto items-center justify-center">
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
        <div className="w-1/2 h-full ml-6 mt-8 md:ml-8 lg:ml-12 xl:ml-20">
          <div className="flex my-auto items-center mr-auto">
            <div className="flex flex-col font-semibold text-5xl items-left h-full my-auto items-center justify-center">
              <h1 className="text-white text-center">Sube tu propio CSV</h1>
              {/* <h2 className="text-white text-center font-light text-2xl mt-4">
                Lorem ipsum dolor sit amet
              </h2> */}
              <button
                onClick={() => open()}
                // onClick={postData}
                className="max-w-[569px] w-full hover:scale-105 mt-6 purpleGradient_btn rounded-full px-2 py-3 text-white text-lg font-bold"
              >
                Subir archivo
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
        <div className="w-1/2 h-full flex flex-col items-center border-l border-gray-700  py-12">
          <div className="ml-auto">
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
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default UploadCSV;
