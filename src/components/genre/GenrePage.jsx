import { FooterSection } from "../FooterSection";
import { HeaderSection } from "../HeaderSection";
import { GenrePick } from "./GenrePick";

export const GenrePage = ({ genreIds }) => {
  return (
    <div>
      <HeaderSection />

      <GenrePick genreIds={genreIds} />

      <FooterSection />
    </div>
  );
};
// {
//   showGenre
//     .filter((genre) => selectedGenreId.includes(genre.id))
//     .map((genre) => <span key={genre.id}>{genre.name}</span>);
// }
