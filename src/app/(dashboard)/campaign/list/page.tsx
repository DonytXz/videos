"use client";
import DropZoneFile from "@/app/(dashboard)/components/shared/DropZoneFile";
import Sidebar from "@/app/(dashboard)/components/shared/SideBar";
import { useRouter } from "next/navigation";
import React from "react";
import { IconEyeFilled } from "@tabler/icons-react";

const List = () => {
  const router = useRouter();
  return (
    <>
      <section className="w-11/12 h-full mx-auto">
        {/* <div className="w-full h-1/2 pt-8"> */}
        {/* </div> */}
        <div className="w-full h-1/2 flex flex-col pt-8">
          <p className="pt-8 text-2xl font-bold text-white">
            Lista de campañas
          </p>
          <div className="flex flex-col bg-gray-50 w-full mt-6">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          First
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Last
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Handle
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Test</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          Bienvenida
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          Presentacion de producto
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                        <button onClick={() => router.push("/video/?id=jbu3490")}>
                            <IconEyeFilled />
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          Fair Markets
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          Bienvenida
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          Presentacion de producto
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                        <button onClick={() => router.push("/video/?id=jbu3478")}>
                            <IconEyeFilled />
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">USC</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          Bienvenida
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          Presentacion de producto
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <button onClick={() => router.push("/video/?id=jbu3470")}>
                            <IconEyeFilled />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default List;
