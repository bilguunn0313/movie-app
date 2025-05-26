import { getTopRatedMovies } from "@/lib/api/getTopRatedMovies";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const TopRatedMovie = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const getTopRated = async () => {
      const response = await getTopRatedMovies();
      setTopRated(response?.results);
    };
    getTopRated();
  }, []);

  return (
    <div className="mx-auto max-w-[1480px]">
      <div className="flex py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">Top Rated</p>
        <p className="flex gap-3">
          See More <MoveRight className="w-4" />
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 ">
        {topRated.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} id={movie.id} />;
        })}
      </div>
    </div>
  );
};
