import { useRouter } from "next/navigation";
import React from "react";

const Steper = ({ step }: any) => {
  const router = useRouter();
  return (
    <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
      <li
        onClick={() => router.push("/wizard/register")}
        className={`${
          step == 0
            ? "text-blue-300 dark:text-blue-200"
            : "text-gray-500 dark:text-gray-400"
        } flex items-center  space-x-2.5 cursor-pointer hover:scale-105`}
      >
        <span
          className={`${
            step == 0
              ? "border-blue-300 rounded-full shrink-0 dark:border-blue-300"
              : "border-gray-300 rounded-full shrink-0 dark:border-gray-200"
          } flex items-center justify-center w-8 h-8 border`}
        >
          1
        </span>
        <span>
          <h3 className="font-medium leading-tight">Registrar campaña</h3>
          <p className="text-sm">Ver detalles</p>
        </span>
      </li>
      <li
        onClick={() => router.push("/wizard/upload")}
        className={`${
          step == 1
            ? "text-blue-300 dark:text-blue-200"
            : "text-gray-300 dark:text-gray-200"
        } flex items-center  space-x-2.5 cursor-pointer hover:scale-105`}
      >
        <span
          className={`${
            step == 1
              ? "border-blue-300 rounded-full shrink-0 dark:border-blue-300"
              : "border-gray-300 rounded-full shrink-0 dark:border-gray-200"
          } flex items-center justify-center w-8 h-8 border`}
        >
          2
        </span>
        <span>
          <h3 className="font-medium leading-tight">Subir video</h3>
          <p className="text-sm">Ver detalles</p>
        </span>
      </li>

      {/* <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
          3
        </span>
        <span>
          <h3 className="font-medium leading-tight">Payment info</h3>
          <p className="text-sm">Step details here</p>
        </span>
      </li> */}
    </ol>
  );
};

export default Steper;
