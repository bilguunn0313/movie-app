import { getPopularMovies } from "@/lib/api/getPopularMovies";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const PopularMovie = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const response = await getPopularMovies();
      setPopularMovies(response?.results);
    };
    getPopular();
  }, []);
  console.log("popular", popularMovies);

  return (
    <div className="mx-auto max-w-[1480px] ">
      <div className="flex py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">Popular</p>
        <p className="flex gap-3">
          See More <MoveRight className="w-4" />
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 ">
        {popularMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} id={movie.id} />;
        })}
      </div>
    </div>
  );
};
