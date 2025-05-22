import { getUpcomingMovies } from "@/lib/api/getUpcomingMovies";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MoveRight } from "lucide-react";

export const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const getUpcoming = async () => {
      const response = await getUpcomingMovies();
      setUpcomingMovies(response?.results);
    };
    getUpcoming();
  }, []);

  return (
    <div className="px-20 py-10">
      <div className="flex py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">Upcoming</p>
        <p className="flex gap-3">
          See More <MoveRight />
        </p>
      </div>
      <div className="md:grid md:grid-cols-5 sm:grid-cols-2 sm:grid  ">
        {upcomingMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
