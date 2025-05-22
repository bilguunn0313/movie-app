import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MovieCarouselItem } from "./MovieCarouselItem";

export const MovieCarousel = ({ nowPlayingMovie }) => {
  return (
    <Carousel
      className="relative"
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {nowPlayingMovie?.slice(0, 3).map((movie, index) => (
          <CarouselItem key={index}>
            <MovieCarouselItem movie={movie} id={movie.id} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="invisible lg:visible left-10 to-50%" />
      <CarouselNext className="invisible lg:visible right-10 to-50%" />
    </Carousel>
  );
};
