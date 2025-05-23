import { FooterSection } from "../FooterSection";
import { HeaderSection } from "../HeaderSection";
import { DetailsDirectors } from "./DetailsDirectors";
import { DetailsHeader } from "./DetailsHeader";
import { DetailsMidSection } from "./DetailsMidSection";
import { DetailsSimiliar } from "./DetailsSimiliar";
import { DetailsTrailer } from "./DetailsTrailer";

export const Details = ({ movie, id }) => {
  return (
    <div>
      <HeaderSection />
      <DetailsHeader movie={movie} id={movie.id} />
      <DetailsMidSection movie={movie} />
      <DetailsDirectors id={movie.id} />
      {/* <DetailsTrailer id={movie.id} /> */}
      <DetailsSimiliar movie={movie} id={id} />
      <FooterSection />
    </div>
  );
};
