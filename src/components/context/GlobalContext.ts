"use client";
import { createContext } from "react";

export interface IGlobalContext {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

export const GlobalContext = createContext<IGlobalContext>({
  keyword: "",
  setKeyword: (keyword) => {},
});
