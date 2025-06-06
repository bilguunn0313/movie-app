import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { getFilterGenre } from "@/lib/api/getFilterGenre";
import { useRouter } from "next/router";

export const HeaderGenre = ({ genreIds }) => {
  const router = useRouter();

  const [useGenre, setUseGenre] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState("");
  const [filterGenre, setFilterGenre] = useState({});
  useEffect(() => {
    const getGenre = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setUseGenre(data?.genres);
        console.log("genre", data);
      } catch (error) {
        console.log(error);
      }
    };
    getGenre();
  }, []);
  const selectGenre = (id) => {
    setSelectedGenreId(id);
    router.push(`genre/${id}`);
  };

  useEffect(() => {
    if (!genreIds) return;
    const getOnFilter = async () => {
      const response = await getFilterGenre(genreIds);
      setFilterGenre(response?.results);
    };

    getOnFilter();
  }, [genreIds]);
  return (
    <div className="">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className=" ">
            <ChevronDown /> <p className="hidden sm:block ">Genre</p>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="sm:w-[700px] min-w-[320px] sm:h-full ">
          <div className="px-2">
            <h2 className="font-[600] sm:text-[24px] text-[20px] ">Genres</h2>
            <p className="font-[400] text-[16px] ">
              See lists of movies by genre
            </p>
          </div>
          <div className="border-1 my-4"></div>
          <div className="flex flex-wrap gap-2  ">
            {useGenre.map((genre) => (
              <Link href={`/genre/${genre.id}`} key={genre.id}>
                <Button
                  variant="outline"
                  className="rounded-full mx-1 text-[12px] font-[600] cursor-pointer  "
                >
                  {genre.name}
                  <ChevronRight />
                </Button>
              </Link>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
