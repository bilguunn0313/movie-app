import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";
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
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-full h-[200px]">
          <div className="px-4  hidden md:flex border-1 gap-2 border-[#E4E4E7] rounded-lg shadow-lg border-none ">
            {useGenre.map((genre) => (
              <Button
                key={genre.id}
                variant="outline"
                className="rounded-full mx-2"
              >
                {genre.name}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
