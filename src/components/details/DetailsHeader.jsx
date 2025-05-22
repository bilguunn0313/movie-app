import { Star } from "lucide-react";

export const DetailsHeader = ({ movie }) => {
  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.poster_path}`;
  const bgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path}`;
  return (
    <div className="mx-auto lg:w-[1024px] md:w-[768px] sm:w-[640px] ">
      <div className="pt-8 pb-4 justify-between flex px-5  ">
        <div>
          <h1 className="text-[24px] font-[600]">{movie.title}</h1>
          <div className="flex">
            <p>{movie.release_date} ·</p>
            <p>PG ·</p>
            <p>{movie.runtime}</p>
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
              <p className="font-[600]">{movie.vote_average}</p>
              <p className="text-[#71717a]">/10</p>
            </div>
          </div>
          <p className="text-[#71717a]">{movie.vote_count}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-8 pb-8 pt-6">
          <img
            src={imgUrl}
            className="w-[100px] h-[148px] lg:w-[290px] lg:h-[428px] hidden lg:flex rounded-2xl"
          />
          <img
            src={bgUrl}
            alt=""
            className="lg:w-[760px] lg:h-[428px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
