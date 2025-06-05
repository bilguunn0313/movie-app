import { getGenre } from "@/lib/api/getGenre";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { getFilterGenre } from "@/lib/api/getFilterGenre";
import { MovieCard } from "../MovieCard";
import { useRouter } from "next/router";
import Link from "next/link";

export const GenrePick = () => {
  const router = useRouter();
  const { genreId, name } = router.query;
  const [showGenre, setShowGenre] = useState([]);
  const [filterGenre, setFilterGenre] = useState({});
  const [selectedGenreId, setSelectedGenreId] = useState({
    ids: [],
    names: [],
  });

  useEffect(() => {
    const getLeftGenre = async () => {
      const response = await getGenre();
      setShowGenre(response?.genres || []);
    };
    getLeftGenre();
  }, []);

  useEffect(() => {
    if (selectedGenreId.length === 0) return;
    const getOnFilterLeft = async () => {
      const response = await getFilterGenre(selectedGenreId.ids.join(","));
      setFilterGenre(response);
    };

    getOnFilterLeft();
  }, [selectedGenreId]);

  const toggleGenre = (id, name) => {
    setSelectedGenreId((prev) => {
      const getSelected = prev.ids.includes(id);

      const newIds = getSelected
        ? prev.ids.filter((genreId) => genreId !== id)
        : [...prev.ids, id];

      const newNames = getSelected
        ? prev.names.filter((genreName) => genreName !== name)
        : [...prev.names, name];

      router.push(
        `/genre/${id}?genreId=${newIds.join(",")}&name=${newNames.join(", ")}`
      );

      return {
        ids: newIds,
        names: newNames,
      };
    });
  };

  // const selectGenre = (id) => {
  //   setSelectedGenreId([...selectedGenreId, id]);
  //   router.push(`/genre/${id}?selectedGenreId=${id}`);
  // };
  console.log(filterGenre.results);
  return (
    <div className="sm:flex">
      <div className="sm:ml-40">
        <div className="px-5">
          <h1 className="font-[600] sm:text-[30px] text-[24px] mb-8 sm:mt-[52px] mt-[32px] sm:px-2 ">
            Search filter
          </h1>
          <div className="mb-5 sm:px-2 ">
            <h2 className="font-[600] sm:text-[24px] text-[20px] ">Genres</h2>
            <p className="font-[400] text-[16px] ">
              See lists of movies by genre
            </p>
          </div>
        </div>
        <div>
          <div className=" sm:w-[500px] ml-3  flex-wrap flex sm:gap-2 gap-2 ">
            {showGenre?.map((genre) => (
              <div className="sm:py-2 py-1">
                <Button
                  key={genre.id}
                  variant={"outline"}
                  className={`flex rounded-full sm:mx-2 text-[12px] font-[600] cursor-pointer hover:bg-gray-300 w-full h-5 sm:h-8 ${
                    selectedGenreId.ids.includes(genre.id)
                      ? "bg-[#18181b] text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => toggleGenre(genre.id, genre.name)}
                >
                  {genre.name}
                  <ChevronRight />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:border-1 sm:max-h-full sm:mt-32 sm:mx-5"></div>
      <div className="">
        <div className="sm:mt-[130px] mt-8 ">
          <h1 className="font-[600] text-[20px] flex mx-5">
            <p> {filterGenre?.total_results} titles in</p>
            <p> "{selectedGenreId.names.join(", ")}"</p>
          </h1>
          <div className="md:grid md:grid-cols-3 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-5 grid grid-cols-2 ">
            {filterGenre?.results?.map((movie) => {
              return (
                <Link href={`/details/${movie.id}`}>
                  <MovieCard key={movie.id} movie={movie} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
