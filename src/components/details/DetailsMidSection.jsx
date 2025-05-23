import { Button } from "../ui/button";

export const DetailsMidSection = ({ movie }) => {
  const posterUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.poster_path}`;
  return (
    <div className="flex px-5 gap-5 mx-auto lg:w-[1100px] md:w-[800px] ">
      <div className="w-1080px mx-auto">
        <img
          src={posterUrl}
          alt=""
          className="w-[100px] h-[148px] lg:hidden md:hidden"
        />
      </div>
      <div className="mx-auto  pb-10 lg:w-[1100px] md:w-[800px]">
        <div className="pb-5 w-[301px] md:w-[800px]">
          {movie.genres?.map((genre) => (
            <Button
              key={genre.id}
              variant="outline"
              className="rounded-full mx-2"
            >
              {genre.name}
            </Button>
          ))}
        </div>
        <div className="w-[228px] h-full lg:w-[1100px] md:w-[800px] mx-10 md:mx-2">
          <p className="">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
