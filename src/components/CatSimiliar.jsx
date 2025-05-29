import { getPopularMovies } from "@/lib/api/getPopularMovies";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
import { getSimiliar } from "@/lib/api/getSimiliar";

export const CatSimiliar = () => {
  const [catSimiliar, setCatSimiliar] = useState([]);

  useEffect(() => {
    const getCatSimiliar = async () => {
      const response = await getSimiliar();
      setCatSimiliar(response?.results);
    };
    getCatSimiliar();
  }, []);

  return (
    <div className="mx-auto max-w-[1480px] ">
      <div className="flex py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">Popular</p>
      </div>
      <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 ">
        {catSimiliar?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} id={movie.id} />;
        })}
      </div>
    </div>
  );
};
