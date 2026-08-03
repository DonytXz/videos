"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconPlus } from "@tabler/icons-react";
import { IconList } from "@tabler/icons-react";
import { IconNotebook } from "@tabler/icons-react";
import { IconHelp } from "@tabler/icons-react";
import { IconRocket } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
import { withBasePath } from "@/lib/basePath";

export default function Sidebar() {
  // const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      // onClick={() => setOpen(!open)}
      // onClick={() => setExpanded(!expanded)}
      // onMouseOver={() => setExpanded(true)}
      // onMouseOut={() => setExpanded(false)}
      className="flex-row lg:flex px-2 lg:px-4 max-h-screen  gradientPerron"
    >
      {/* <div
        className={` 
        ${!open ? "lg:w-30" : "lg:w-full "}
           flex flex-col lg:h-screen p-3 pt-6 shadow ax-h-screen delay-150 duration-300 ease-in-out`}
      > */}
      <div
        className={`lg:w-30 transition transform flex flex-col lg:h-screen p-3 pt-6 delay-150 duration-300 ease-in-out`}
      >
        {/* <div className="container mx-auto mt-4 lg:mt-12">
        <div className="p-4 mx-2 shadow-sm">
          <p>Add Dashboard Analytics </p>
        </div>
      </div> */}
        {/* <div className=" h-full"> */}
        <div className="flex mt-6">
          <button
            className={`${expanded ? "ml-3 mb-auto my-auto" : "mx-auto mt-3"} hover:scale-110`}
            onClick={() => setExpanded(!expanded)}
          >
            <IconMenu2 color="white" />
          </button>
          {/* <div className={` ${expanded ? "block" : "hidden"} `}>
            <Image
              src={withBasePath("/robot.png")}
              alt="Hero"
              height={85}
              width={85}
              priority
            />
          </div> */}

          {expanded && (
            <h2 className="text-xl font-bold text-white my-auto ml-4">
              DeepTarget
            </h2>
          )}
          <div className={` ${expanded ? "block" : "hidden"}`}>
            <Image
              src={withBasePath("/robot.png")}
              alt="Hero"
              height={85}
              width={85}
              priority
            />
          </div>
        </div>
        <div className="flex items-center justify-between max-h-screen">
          {/* {expanded && (
            <h2 className="text-xl font-bold text-white">DeepTarget</h2>
          )} */}

          {/* <button
              className={`${open ? "" : "mx-auto"}`}
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button> */}
        </div>

        <div className="mt-4">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm hover:scale-105">
              <Link
                href="/wizard/register"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <IconPlus color="white" />
                {expanded && (
                  <span className="text-gray-100">Agregar Campaña</span>
                )}
              </Link>
            </li>
            <li className="rounded-sm hover:scale-105">
              <Link
                href="/campaings"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <IconList color="white" />
                {expanded && <span className="text-gray-100">Campañas</span>}
              </Link>
            </li>
            {/* <li className="rounded-sm">
                <Link
                  href="/orders"
                  className="flex items-center p-2 space-x-3 rounded-md pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  {open && <span className="text-gray-100">Orders</span>}
                </Link>
              </li> */}
          </ul>
        </div>

        {expanded && (
          <div className="mt-auto mb-6 pl-2 bg-black p-4 rounded-2xl bg-blur">
            <div className="flex ">
              <IconRocket color="white" />
              <p className="text-white ml-2 text-lg">Actualizar</p>
            </div>
            <p className="text-white ml-8 mt-2 text-md">
              Actualiza para mas opciones
            </p>
            <button className="gradient p-2 hover:scale-105 rounded-2xl mx-auto w-full mt-2 ml-1 text-white">
              Actualizar
            </button>
          </div>
        )}

        <div className="mt-auto mb-4">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm hover:scale-105">
              <Link
                href="/auth/login"
                className="flex items-center p-2 space-x-3 rounded-md pointer-events-none"
              >
                <IconNotebook color="white" />
                {expanded && <span className="text-gray-100">Tutoriales</span>}
              </Link>
            </li>
            <li className="rounded-sm hover:scale-105 text-white">
              <Link
                href="/auth/login"
                className="flex items-center p-2 space-x-3 rounded-md pointer-events-none"
              >
                <IconHelp color="white" />
                {/* <IconHelpCircleFilled color="white" /> */}
                {expanded && <span className="text-gray-100">Ayduda</span>}
              </Link>
            </li>
            <li className="rounded-sm hover:scale-105">
              <Link
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {expanded && (
                  <span className="text-gray-100">Configuración</span>
                )}
              </Link>
            </li>
            <li className="rounded-sm hover:scale-105">
              <Link
                href="/auth/login"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                {expanded && <span className="text-gray-100">Salir</span>}
              </Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
