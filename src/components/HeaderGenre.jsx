import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const HeaderGenre = () => {
  const [useGenre, setUseGenre] = useState([]);
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
  return (
    <div className="">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <ChevronDown /> Genre
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[700px] h-full">
          <div className="px-2">
            <h2 className="font-[600] text-[24px] ">Genres</h2>
            <p className="font-[400] text-[16px] ">
              See lists of movies by genre
            </p>
          </div>
          <div className="border-1 my-4"></div>
          <div className="hidden md:flex flex-wrap gap-2  ">
            {useGenre.map((genre) => (
              <Button
                key={genre.id}
                variant="outline"
                className="rounded-full mx-1 text-[12px] font-[600] cursor-pointer  "
              >
                {genre.name}
                <ChevronRight />
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
