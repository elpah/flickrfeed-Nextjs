import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

interface IImageData {
  title: string;
  media: string;
}

const useImages = () => {
  const { keyword } = useContext(GlobalContext);

  const fetchImages = () =>
    axios
      .get<IImageData[]>("/api", {
        params: { keyword: keyword },
      })
      .then((res) => {
        return res.data;
      });

  return useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
  });
};

export default useImages;
