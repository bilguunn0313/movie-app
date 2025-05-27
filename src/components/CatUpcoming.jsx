import { useEffect, useState } from "react";
import { FooterSection } from "./FooterSection";
import { HeaderSection } from "./HeaderSection";
import { MovieCard } from "./MovieCard";
import { getUpcomingMovies } from "@/lib/api/getUpcomingMovies";

export const CatUpcoming = ({ movie }) => {
  const [catUpcomingMovies, setCatUpcomingMovies] = useState([]);

  useEffect(() => {
    const getCatUpcoming = async () => {
      const response = await getUpcomingMovies();
      setCatUpcomingMovies(response?.results);
    };
    getCatUpcoming();
  }, []);
  return (
    <div className="mx-auto max-w-[1480px]">
      <div className="flex py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">Upcoming</p>
      </div>
      <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 grid grid-cols-2 ">
        {catUpcomingMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} id={movie.id} />;
        })}
      </div>
    </div>
  );
};
