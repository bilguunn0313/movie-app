import { Film, Moon, Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { HeaderGenre } from "./HeaderGenre";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export const HeaderSection = ({ id }) => {
  return (
    <div className="flex justify-between  mx-auto lg:w-[1480px] w-screen ">
      <Link href={`/`}>
        <div className="flex gap-2 py-4 px-5 pt-6.5">
          <Film className="text-indigo-700" />
          <p className="text-indigo-700">Movie Z</p>
        </div>
      </Link>
      <div className="py-4 flex gap-4">
        <HeaderGenre />

        <div className="hidden md:flex">
          {/* <Search className="w-4 h-4 absolute top-7 left-255 right-295 text-[#71717A] " /> */}
          {/* <input
            type="text"
            placeholder="Search..."
            className="border-8 shadow-lg border-transparent rounded-xl md:pr-40 md:pl-6 relative"
          /> */}
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading={`See all results for movie`}>
                <CommandItem></CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
      <div className="flex">
        <button className="mx-2 border-8 shadow-lg border-transparent rounded-xl my-5 block lg:hidden ">
          <Search className="w-4 h-4  " />
        </button>
        {/* <button className="mx-2 border-8 shadow-lg border-transparent rounded-xl my-5 ">
          <Moon className="w-4 h-4  " />
        </button> */}
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Dark Mode</Label>
          <Link href={`/search/SearchPage`}>
            <button>search</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
