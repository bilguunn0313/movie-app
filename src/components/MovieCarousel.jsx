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
            <MovieCarouselItem movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
