import { FooterSection } from "../FooterSection";
import { HeaderSection } from "../HeaderSection";
import { GenrePick } from "./GenrePick";
import { GenreResult } from "./GenreResult";

export const GenrePage = ({ genreIds }) => {
  return (
    <div>
      <HeaderSection />
      <div className="flex">
        <GenrePick genreIds={genreIds} />
        <GenreResult />
      </div>
      <FooterSection />
    </div>
  );
};
