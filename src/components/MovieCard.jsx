import { Star } from "lucide-react";

export const MovieCard = () => {
  return (
    <div className="py-4">
      <div className="px-4">
        <img
          src="/sample.jpg"
          alt="card"
          className="w-[157px] h-[233.1px] md:w-[264px] md:h-[340px] rounded-md "
        />
        <div className=" bg-[#f4f4f5] px-2 py-1 w-[157px] h-[76px] rounded-md md:w-[264px] md:h-[95px]">
          <div className="flex gap-1">
            <Star
              color="rgba(253, 224, 71, 1)"
              fill="rgba(253, 224, 71, 1)"
              className="w-4 "
            />
            <p>6.9</p>
            <p className="text-[#71717a]">/10</p>
          </div>
          <p className="px-1">Dear Santa</p>
        </div>
      </div>
    </div>
  );
};
