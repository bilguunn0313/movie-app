import { getGenre } from "@/lib/api/getGenre";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { getFilterGenre } from "@/lib/api/getFilterGenre";
import { MovieCard } from "../MovieCard";

export const GenrePick = ({ genreIds }) => {
  const [showGenre, setShowGenre] = useState([]);
  const [filterGenre, setFilterGenre] = useState({});
  const [filterIds, setFilterIds] = useState("");
  const [selectedGenreId, setSelectedGenreId] = useState([]);

  const toggleGenre = (id) => {
    setSelectedGenreId((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  useEffect(() => {
    const getLeftGenre = async () => {
      const response = await getGenre();
      setShowGenre(response?.genres);
    };
    getLeftGenre();
  }, []);

  useEffect(() => {
    if (!selectedGenreId) return;
    const getOnFilterLeft = async () => {
      const response = await getFilterGenre(selectedGenreId);
      setFilterGenre(response);
    };

    getOnFilterLeft();
  }, [selectedGenreId]);
  console.log(filterGenre.results);
  return (
    <div className="flex">
      <div className="ml-40">
        <h1 className="font-[600] text-[30px] mb-8 mt-[52px] px-2 ">
          Search filter
        </h1>
        <div className="mb-5 px-2 ">
          <h2 className="font-[600] text-[24px] ">Genres</h2>
          <p className="font-[400] text-[16px] ">
            See lists of movies by genre
          </p>
        </div>
        <div>
          <div className=" w-[500px]  flex-wrap hidden md:flex gap-2 ">
            {showGenre?.map((genre) => (
              <div className="py-2">
                <Button
                  key={genre.id}
                  variant={selectedGenreId === genre.id ? "default" : "outline"}
                  className={`rounded-full mx-2 text-[12px] font-[600] cursor-pointer ${
                    selectedGenreId === genre.id
                      ? "bg-[#18181b] text-white"
                      : ""
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
      <div className="border-1 max-h-full mt-32 mx-5"></div>
      <div className="">
        <div className="mt-[130px]">
          <h1 className="font-[600] text-[20px] ">
            {filterGenre?.total_results} titles in
            {/* {showGenre
              .find((genre) => selectedGenreId.includes(genre.id))
              .map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))} */}
          </h1>
          <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 grid grid-cols-2 ">
            {filterGenre?.results?.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
