import { Star } from "lucide-react";

export const DetailsHeader = ({ movie }) => {
  return (
    <div className="pt-8 pb-4 justify-between flex ">
      <div className="">
        <h1 className="text-[24px] font-[600]">{movie.title}</h1>
        <div className="flex">
          <p>{movie.release_date} ·</p>
          <p>PG ·</p>
          <p>{movie.runtime}</p>
        </div>
      </div>
      <div>
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
    </div>
  );
};
