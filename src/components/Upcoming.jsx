import { getUpcomingMovies } from "@/lib/api/getUpcomingMovies";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { HomePageLoader } from "./HomePageLoader";

export const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUpcoming = async () => {
      setLoading(true);
      const response = await getUpcomingMovies();
      setUpcomingMovies(response?.results);
      setLoading(false);
    };
    getUpcoming();
  }, []);
  // if (!loading) return <HomePageLoader />;

  return (
    <div className="mx-auto max-w-[1480px]">
      <div className="flex sm:py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">Upcoming</p>
        <Link href={`/category/CatUpcoming`}>
          <p className="flex gap-3 cursor-pointer text-gray-500 hover:text-blue-700 transition-colors duration-200 ">
            See More <MoveRight className="w-4 " />
          </p>
        </Link>
      </div>
      {loading && <HomePageLoader />}
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
