"use client";
import { useState,useContext, useEffect, } from "react";
import Image from "next/legacy/image";
import logo from '../assets/elpahLogo.png'
import { GlobalContext } from './context/GlobalContext';
import {  useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'


export default function Nav() {
  const { keyword, setKeyword } = useContext(GlobalContext);
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword('');
    const keyword = e.currentTarget.search.value.trim();
    setKeyword(keyword);
    await router.push(`/?search=${keyword}`);
    }

    useEffect(()=>{
      const key = searchParams.get('search')
      if(key)
     setKeyword(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

  return (
    <header className="w-full p-4  border-solid border-gray-500 shadow-md">
      <nav className=" flex justify-between items-center text-white">
        <div className="w-1/5 md:w-20">
          <Image src={logo.src} alt={"Logo"} 
          height={80} width={80} 
          priority />
        </div>
        
        <form onSubmit={handleSubmit}
          className="w-3/5  flex items-center justify-center"
          style={{
            background:
              "transparent url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\") no-repeat 13px center",
          }}
        >
          <input
            className="w-full h-10 md:h-12 border border-r-0 rounded-l-md block pl-12 bg-transparent text-black"
            type="search"
            placeholder="Search..."
            name="search"
          />
          <button type = "submit" className="bg-gray-700  text-white text-xs md:text-base lg:text-lg border-gray-500  h-10 md:h-12 border-l-0 border-r rounded-r-md px-2 hover:bg-gray-900">
            Search
          </button>
        </form>
    
        <div className="hidden md:block w-1/10"></div>
      
      </nav>
    </header>
  );
}
