import { getPopularMovies } from "@/lib/api/getPopularMovies";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";

export const PopularMovie = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const response = await getPopularMovies();
      setPopularMovies(response?.results);
    };
    getPopular();
  }, []);

  return (
    <div className="mx-auto max-w-[1480px] ">
      <div className="flex py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">Popular</p>
        <Link href={`/category/CatPopular`}>
          <p className="flex gap-3 cursor-pointer  text-gray-500 hover:text-blue-700 transition-colors duration-200">
            See More <MoveRight className="w-4 " />
          </p>
        </Link>
      </div>
      <div className="md:grid md:grid-cols-3 grid grid-cols-2 sm:grid lg:grid lg:grid-cols-5  ">
        {popularMovies.slice(0, 10).map((movie) => {
          return (
            <Link href={`/details/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
