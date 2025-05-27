import { getPopularMovies } from "@/lib/api/getPopularMovies";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";

export const CatPopular = () => {
  const [catPopularMovies, setCatPopular] = useState([]);

  useEffect(() => {
    const getCatPopular = async () => {
      const response = await getPopularMovies();
      setCatPopular(response?.results);
    };
    getCatPopular();
  }, []);

  return (
    <div className="mx-auto max-w-[1480px] ">
      <div className="flex py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">Popular</p>
      </div>
      <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 ">
        {catPopularMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} id={movie.id} />;
        })}
      </div>
    </div>
  );
};
