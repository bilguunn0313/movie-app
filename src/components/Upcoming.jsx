import { getUpcomingMovies } from "@/lib/api/getUpcomingMovies";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export const Upcoming = ({ categoryName }) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const getUpcoming = async () => {
      const response = await getUpcomingMovies();
      setUpcomingMovies(response?.results);
    };
    getUpcoming();
  }, []);

  return (
    <div className="mx-auto max-w-[1480px]">
      <div className="flex py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">Upcoming</p>
        <Link href={`/category/CatUpcoming`}>
          <p className="flex gap-3 cursor-pointer text-gray-500 hover:text-blue-700 transition-colors duration-200 ">
            See More <MoveRight className="w-4 " />
          </p>
        </Link>
      </div>
      <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 grid grid-cols-2 ">
        {upcomingMovies.slice(0, 10).map((movie) => {
          return (
            <Link href={`/details/${movie.id}`}>
              <MovieCard key={movie.id} movie={movie} id={movie.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
