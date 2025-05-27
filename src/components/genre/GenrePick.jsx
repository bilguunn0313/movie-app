import { getGenre } from "@/lib/api/getGenre";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export const GenrePick = () => {
  const [showGenre, setShowGenre] = useState([]);

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
            {showGenre.map((genre) => (
              <div className="py-2">
                <Button
                  key={genre.id}
                  variant="outline"
                  className="rounded-full mx-2 text-[12px] font-[600] cursor-pointer   "
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
    </div>
  );
};
