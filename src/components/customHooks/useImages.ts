import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

interface ImageData {
  title: string;
  media: string;
}

const useImages = () => {
  const { keyword } = useContext(GlobalContext);

  const fetchImages = () =>
    axios
      .get<ImageData[]>("/api", {
        params: { keyword: keyword },
      })

      .then((res) => {
        console.log(res.data);
        return res.data;
      });

  return useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
  });
};

export default useImages;
