import { Play, Star, X } from "lucide-react";

import React, { useEffect, useState } from "react";
import { DetailsTrailer } from "./DetailsTrailer";

export const DetailsHeader = ({ movie, id }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  // useEffect(() => {
  //   if (!id) return;
  //   getTrailer();
  // }, [id]);

  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.poster_path}`;
  const bgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.backdrop_path}`;
  console.log(movie);
  return (
    <div className="mx-auto lg:w-[1024px] md:w-[768px] sm:w-[640px] ">
      <div className="pt-8 pb-4 justify-between flex px-5  ">
        <div>
          <h1 className="text-[24px] font-[600]">{movie?.title}</h1>
          <div className="flex">
            <p>{movie?.release_date} ·</p>
            <p>PG ·</p>
            <p>
              {Math.floor(movie?.runtime / 60)}h {movie?.runtime % 60}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex">
            <Star
              color="rgba(253, 224, 71, 1)"
              fill="rgba(253, 224, 71, 1)"
              className="w-4"
            />

            <div className="flex">
              <p className="font-[600]">{movie?.vote_average}</p>
              <p className="text-[#71717a]">/10</p>
            </div>
          </div>
          <p className="text-[#71717a]">{movie?.vote_count}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-8 pb-8 pt-6">
          <img
            src={imgUrl}
            className="w-[100px] h-[148px] lg:w-[290px] lg:h-[428px] hidden lg:flex rounded-2xl"
          />
          <div>
            <img
              src={bgUrl}
              alt=""
              className="lg:w-[760px] lg:h-[428px] rounded-2xl relative"
            />
            <button
              onClick={() => setShowTrailer(true)}
              className="absolute top-1/2 left-1/2 flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 hover:bg-gray-100 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <Play />
              <span>Watch Trailer</span>
            </button>

            {showTrailer && (
              <div>
                <div>
                  <button
                    onClick={() => setShowTrailer(false)}
                    className="absolute top-2 right-2 text-white bg-black rounded-full p-2 z-50"
                  >
                    <X />
                  </button>
                  <DetailsTrailer id={id} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
