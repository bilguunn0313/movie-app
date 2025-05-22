import { getGenre } from "@/lib/api/getGenre";
import { useEffect, useState } from "react";

export const DetailsGenre = ({ movie, movieId }) => {
  const [byGenre, setByGenre] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const theGenre = async () => {
      const response = await getGenre();
      setByGenre(response);
    };
    theGenre();
  }, [movieId]);

  //   const genreUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.genre}`;
  return (
    <div className="mx-auto max-w-[1080px] my-3">
      {/* <button className="border-1 rounded-full  px-3">
        <p className="font-[600] text-[12px]">
          {byGenre.map((genre) => {
            return <Details key={index} genre={genre} />;
          })}
        </p>
      </button> */}
    </div>
  );
};
