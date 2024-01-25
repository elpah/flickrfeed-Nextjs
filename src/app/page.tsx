"use client";
import React, {  useEffect, useContext } from "react";
 import useImages from '../components/customHooks/useImages';
 import { GlobalContext } from "../components/context/GlobalContext";

import Image from "next/image";

type Image={
  title:string;
  media:string;

}

export default function Home() {
  const { keyword } = useContext(GlobalContext);
   const { data: images, isLoading, error ,refetch} = useImages();

   useEffect(()=>{
    refetch();
   }, [keyword, refetch])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } 

  return (
    !images || images.length === 0 ? (
      <div className="flex justify-center h-screen text-red-500 mt-12 text-lg md:text-xl lg:text-2xl">
        No images found for keyword: '{keyword}'
      </div>
    ) : (
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images?.map((image:Image, key:string) => (
              <div key={key} className="relative w-full h-40 md:h-48 lg:h-56">
                <Image
                  src={image.media}
                  alt={image.title}
                  priority
                  fill={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );  
}