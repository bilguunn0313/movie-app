import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard";
import { getUpcomingMovies } from "@/lib/api/getUpcomingMovies";
import { getGenre } from "@/lib/api/getGenre";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export const SearchResults = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [showGenre, setShowGenre] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState([]);
  useEffect(() => {
    const getUpcoming = async () => {
      const response = await getUpcomingMovies();
      setUpcomingMovies(response?.results);
    };
    getUpcoming();
  }, []);

  useEffect(() => {
    const getLeftGenre = async () => {
      const response = await getGenre();
      setShowGenre(response?.genres);
    };
    getLeftGenre();
  }, []);
  return (
    <div className="flex">
      <div className="ml-40">
        <h1 className="font-[600] text-[30px] mb-8 mt-[52px] px-2 ">
          Search Results
        </h1>
        <div>
          <h1>5 Results for Wicked</h1>
          <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 grid grid-cols-2 ">
            {upcomingMovies.slice(0, 10).map((movie) => {
              return <MovieCard key={movie.id} movie={movie} id={movie.id} />;
            })}
          </div>
        </div>
      </div>
      <div className="border-1 max-h-full mt-32 mx-5"></div>

      <div className="mt-[130px] ">
        <div className="mb-5 px-2 ">
          <h2 className="font-[600] text-[24px] ">Search by genre</h2>
          <p className="font-[400] text-[16px] ">
            See lists of movies by genre
          </p>
        </div>
        <div className=" w-[500px]  flex-wrap hidden md:flex gap-2 ">
          {showGenre?.map((genre) => (
            <div className="py-2">
              <Button
                key={genre.id}
                variant={selectedGenreId === genre.id ? "default" : "outline"}
                className={`rounded-full mx-2 text-[12px] font-[600] cursor-pointer ${
                  selectedGenreId === genre.id ? "bg-[#18181b] text-white" : ""
                }`}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
                <ChevronRight />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
