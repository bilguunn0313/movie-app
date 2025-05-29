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
    if (genreId && name) {
      const ids = genreId.split(",").map((id) => Number(id));
      const names = name.split(", ");
      setSelectedGenreId({ ids, names });
    }
  }, [genreId, name]);

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

  const selectGenre = (id) => {
    setSelectedGenreId([...selectedGenreId, id]);
    router.push(`/genre/${id}?selectedGenreId=${id}`);
  };
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
                  variant={"outline"}
                  className={`flex rounded-full mx-2 text-[12px] font-[600] cursor-pointer hover:bg-gray-300  ${
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
      <div className="border-1 max-h-full mt-32 mx-5"></div>
      <div className="">
        <div className="mt-[130px]">
          <h1 className="font-[600] text-[20px] flex">
            <p> {filterGenre?.total_results} titles in</p>
            <p> "{selectedGenreId.names}"</p>
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
