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
            <Link href={`/details/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-2 md:hidden ">
        {similiar.slice(0, 4).map((movie) => {
          return (
            <Link href={`/details/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} id={movie.id} className="w-[150px]" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
