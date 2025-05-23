import { Play, Star } from "lucide-react";
import Link from "next/link";

export const MovieCarouselItem = ({ movie, id }) => {
  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path}`;
  return (
    <Link href={`/details/${id}`}>
      <div className="relative">
        <img
          src={imgUrl}
          alt="head"
          className="lg:relative w-screen lg:h-[976px] "
        />
        <div className=" lg:absolute top-70 left-20 lg:text-white lg:w-[340px] ">
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

          <div className="px-5 py-5">
            <button className="flex  border-8 text-white border-black bg-black w-[145px] gap-2 rounded-lg md:text-black md:bg-white md:border-white">
              <Play className="w-4 h-6" />
              <p className="font-[500]">Watch Trailer</p>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
