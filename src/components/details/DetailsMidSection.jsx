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
      <div className="mx-auto w-[201px] h-[304px] pb-10 lg:w-[1100px] md:w-[800px]">
        <div className="pb-5 ">
          <button className="border-1 rounded-full  px-3 ">
            <p className="font-[600] text-[12px] ">Fairy Tale</p>
          </button>

          <button className="border-1 rounded-full  px-3 ">
            <p className="font-[600] text-[12px] ">Fairy Tale</p>
          </button>
          <button className="border-1 rounded-full  px-3 ">
            <p className="font-[600] text-[12px] ">Fairy Tale</p>
          </button>
          <button className="border-1 rounded-full  px-3 ">
            <p className="font-[600] text-[12px] ">Fairy Tale</p>
          </button>
          <button className="border-1 rounded-full  px-3 ">
            <p className="font-[600] text-[12px] ">Fairy Tale</p>
          </button>
        </div>
        <div>
          <p className="">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
