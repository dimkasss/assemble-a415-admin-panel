"use client";

import { getRandomTailwindColor } from "@/lib/utils";

import Image from "next/image";

import TrashCanIcon from "@/public/trash-can.svg";
import { useContext, useEffect } from "react";
import { DataContext, useData } from "./dataHandler/DataContextProvider";

const Detail = () => {
  const detailBackgroundColor = getRandomTailwindColor();

  const data = useData();
  if (!data) return <div>Loading...</div>;

  const { assemblies, setAssemblies, fetchAssemblies } = data;

  useEffect(() => {
    fetchAssemblies().then((res) => {
      setAssemblies(res);
    });
  }, []);

  console.log("@ assemblies", assemblies);

  return (
    <div>
      <div className="flex h-12 mb-4 *:h-full gap-10">
        <div
          className={`bg-${detailBackgroundColor} flex items-center p-2 w-full text-gray-700`}
        >
          {/* {detail.name} */}1
        </div>
        <div className="flex gap-2 items-center ml-8">
          <button className="text-2xl">-</button>
          <div
            className={`bg-${detailBackgroundColor} flex items-center justify-center h-full min-w-24 text-gray-700`}
          >
            {/* {detail.count} */}2
          </div>
          <button className="text-2xl">+</button>
        </div>
        <button onClick={() => {}}>
          <Image
            src={TrashCanIcon}
            alt="Удалить"
            className="flex items-center"
          />
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Detail;
