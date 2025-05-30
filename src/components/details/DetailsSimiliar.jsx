import { MoveRight, Star } from "lucide-react";
import { MovieCard } from "../MovieCard";
import { useEffect, useState } from "react";
import Link from "next/link";

export const DetailsSimiliar = ({ movie, id }) => {
  const [similiar, setSimiliar] = useState([]);
  const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.poster_path}`;

  useEffect(() => {
    const getSimiliar = async () => {
      if (!id) return;
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${id}/similar?language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setSimiliar(data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    getSimiliar();
  }, [id]);
  return (
    <div className="mx-auto max-w-[1080px] py-5">
      <div className="flex py-5 px-4 justify-between">
        <p className="font-extrabold text-[24px]">More like this</p>
        <Link href={`/category/CatSimiliar`}>
          <p className="flex gap-3 text-gray-500 hover:text-blue-700 transition-colors duration:200 cursor-pointer ">
            See More <MoveRight className="w-4" />
          </p>
        </Link>
      </div>
      <div className="md:grid md:grid-cols-3  lg:grid lg:grid-cols-5 hidden grid-cols-2 ">
        {similiar.slice(0, 5).map((movie) => {
          return (
            <div className="py-4">
              <div className="mx-10 sm:mx-auto lg:max-w-[1080px] sm:w-[640px]">
                <img
                  src={imageUrl}
                  alt="card"
                  className="w-[157px] h-[233.1px] md:w-[229px] md:h-[340px] rounded-md cursor-pointer "
                />
                <div className=" bg-[#f4f4f5] px-2 py-1 max-w-[157px] h-full rounded-md md:max-w-[229px] md:h-[95px] cursor-pointer">
                  <div className="flex gap-1">
                    <Star
                      color="rgba(253, 224, 71, 1)"
                      fill="rgba(253, 224, 71, 1)"
                      className="w-4 "
                    />
                    <p>{movie?.vote_average.toFixed(1)}</p>
                    <p className="text-[#71717a]">/10</p>
                  </div>
                  <p className="px-1">{movie?.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 md:hidden ">
        {similiar.slice(0, 4).map((movie) => {
          return (
            <Link href={`/details/${movie.id}`}>
              <MovieCard
                key={movie.id}
                movie={movie}
                id={movie.id}
                className="w-[150px]"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
