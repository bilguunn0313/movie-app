import { FooterSection } from "../FooterSection";
import { HeaderSection } from "../HeaderSection";
import { GenrePick } from "./GenrePick";
import { GenreResult } from "./GenreResult";

export const GenrePage = () => {
  return (
    <div>
      <HeaderSection />
      <div className="flex">
        <GenrePick />
        <GenreResult />
      </div>
      <FooterSection />
    </div>
  );
};
