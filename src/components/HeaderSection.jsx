import { Film, Moon, Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
export const HeaderSection = () => {
  return (
    <div className="flex justify-between px-10 w-max-[1280px]">
      <div className="flex gap-2 py-4 px-5 pt-6.5">
        <Film className="text-indigo-700" />
        <p className="text-indigo-700">Movie Z</p>
      </div>
      <div className="py-4 flex gap-4">
        <div className="px-4 pl-6 hidden sm:flex border-1 gap-1 border-[#E4E4E7] rounded-lg shadow-lg border-none ">
          <ChevronDown className="w-4 h-9" />
          <button className="cursor-pointer ">Genre</button>
        </div>
        <div className="flex">
          <Search className="w-4 h-4 absolute top-7 right-295 text-[#71717A] " />
          <input
            type="text"
            placeholder="Search..."
            className="border-8 shadow-lg border-transparent rounded-xl md:pr-40 md:pl-6 relative"
          />
        </div>
      </div>
      <div>
        <button className="mx-2 border-8 shadow-lg border-transparent rounded-xl my-5 ">
          <Moon className="w-4 h-4  " />
        </button>
      </div>
    </div>
  );
};
