import { getTopRatedMovies } from "@/lib/api/getTopRatedMovies";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const CatTopRated = () => {
  const [catTopRated, setCatTopRated] = useState([]);

  useEffect(() => {
    const getCatTopRated = async () => {
      const response = await getTopRatedMovies();
      setCatTopRated(response?.results);
    };
    getCatTopRated();
  }, []);

  return (
    <div className="mx-auto max-w-[1480px]">
      <div className="flex py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">Top Rated</p>
      </div>
      <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 ">
        {catTopRated.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} id={movie.id} />;
        })}
      </div>
    </div>
  );
};
