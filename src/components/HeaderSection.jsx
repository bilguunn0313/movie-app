import { Film, Moon, Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { HeaderGenre } from "./HeaderGenre";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SearchInput } from "./SearchInput";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const HeaderSection = ({ query }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between  md:mx-auto  ">
      <Link href={`/`}>
        <div className="flex gap-2 py-4 lg:px-5 pt-6.5">
          <Film className="text-indigo-700" />
          <p className="text-indigo-700">Movie Z</p>
        </div>
      </Link>
      <div className="py-4 hidden md:flex gap-4">
        <HeaderGenre />

        <div className="hidden md:flex">
          <SearchInput query={query} />
        </div>
      </div>
      <div className="flex">
        <button
          className="mx-2 border-8 shadow-lg border-transparent rounded-xl my-5 block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Search className="w-4 h-4  " />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute  left-25  px-4"
            >
              <div className=" pt-4 w-full  rounded-xl ">
                <SearchInput query={query} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* <button className="mx-2 border-8 shadow-lg border-transparent rounded-xl my-5 ">
          <Moon className="w-4 h-4  " />
        </button> */}
        <div className="flex items-center sm:space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode" className="hidden md:flex">
            Dark Mode
          </Label>
        </div>
      </div>
    </div>
  );
};
