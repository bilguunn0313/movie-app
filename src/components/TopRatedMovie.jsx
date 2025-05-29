import { getTopRatedMovies } from "@/lib/api/getTopRatedMovies";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";

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
        <Link href={`/category/CatTopRated`}>
          <p className="flex gap-3 cursor-pointer">
            See More <MoveRight className="w-4 " />
          </p>
        </Link>
      </div>
      <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 ">
        {topRated.slice(0, 10).map((movie) => {
          return (
            <Link href={`/details/${movie.id}`}>
              <MovieCard key={movie.id} movie={movie} id={movie.id} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};
