import { Play, Star } from "lucide-react";
import Link from "next/link";

import { MovieTrailer } from "./movieTrailer";

export const MovieCarouselItem = ({ movie, id }) => {
  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path}`;
  return (
    <div className="relative">
      <Link href={`/details/${id}`}>
        <img
          src={imgUrl}
          alt="head"
          className="sm:relative  sm:mx-auto w-full md:mx-auto md:w-[1600px]  "
        />
      </Link>
      <div className=" lg:absolute top-90 left-120 lg:text-white lg:w-[340px] sm:mx-auto ">
        <div className="flex justify-between px-5 py-4 md:flex-col md:text-[12px]">
          <div>
            <p className="text-sm">Now playing:</p>
            <p className="text-[24px] font-[600]">{movie.title}</p>
          </div>
          <div className="flex gap-1 pt-3">
            <Star
              fill="rgba(253, 224, 71, 1)"
              color="rgba(253, 224, 71, 1)"
              className="w-[28px] h-[28px]"
            />
            <p className="font-[600] text-[18px]">
              {Math.floor(movie.vote_average)}
            </p>
            <p className="text-[#71717a] text-[16px]">/10</p>
          </div>
        </div>
        <div className="px-5 text-[12px] ">
          <p>{movie.overview}</p>
        </div>
        <div className="mx-5 py-3">
          <MovieTrailer movieId={id} />
        </div>
      </div>
    </div>
  );
};
