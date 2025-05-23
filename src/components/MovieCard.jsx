import { Star } from "lucide-react";
import Link from "next/link";

export const MovieCard = ({ movie, id }) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.poster_path}`;
  return (
    <div className="py-4">
      <div className="px-4">
        <Link href={`/details/${id}`}>
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
              <p>{movie.vote_average.toFixed(1)}</p>
              <p className="text-[#71717a]">/10</p>
            </div>
            <p className="px-1">{movie?.title}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
