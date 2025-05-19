import { Play, Star } from "lucide-react";

export const MovieCarouselItem = () => {
  return (
    <div>
      <img src="/witch.jpg" alt="head" className="md:relative" />
      <div className="md:absolute top-70 left-20 md:text-white md:w-[340px]">
        <div className="flex justify-between px-5 py-4 md:flex-col md:text-[12px]">
          <div>
            <p className="text-sm">Now playing:</p>
            <p className="text-[24px] font-[600]">Wicked</p>
          </div>
          <div className="flex gap-1 pt-3">
            <Star
              fill="rgba(253, 224, 71, 1)"
              color="rgba(253, 224, 71, 1)"
              className="w-[28px] h-[28px]"
            />
            <p className="font-[600] text-[18px]">6.9</p>
            <p className="text-[#71717a] text-[16px]">/10</p>
          </div>
        </div>
        <div className="px-5 text-[12px] ">
          <p>
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </p>
        </div>
        <div className="px-5 py-5">
          <button className="flex  border-8 text-white border-black bg-black w-[145px] gap-2 rounded-lg md:text-black md:bg-white md:border-white">
            <Play className="w-4 h-6" />
            <p className="font-[500]">Watch Trailer</p>
          </button>
        </div>
      </div>
    </div>
  );
};
