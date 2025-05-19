import { Film, Moon, Search } from "lucide-react";

export const HeaderSection = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 py-4 px-5 pt-5">
        <Film className="text-indigo-700" />
        <p className="text-indigo-700">Movie Z</p>
      </div>
      <div className="py-4 flex">
        <button className="border-8 shadow-lg border-transparent rounded-xl">
          <Search className="w-4 h-4 " />
        </button>
        <button className="mx-2 border-8 shadow-lg border-transparent rounded-xl">
          <Moon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
