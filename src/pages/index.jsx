import { FooterSection } from "@/components/FooterSection";
import { HeaderSection } from "@/components/HeaderSection";
import { MovieCard } from "@/components/MovieCard";
import { MovieCarousel } from "@/components/MovieCarousel";
import { MovieCarouselItem } from "@/components/MovieCarouselItem";
import { useEffect, useState } from "react";

export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      console.log(movies);
      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div className="">
      <HeaderSection />
      <div>
        <MovieCarousel nowPlayingMovie={nowPlayingMovie} />
      </div>
      <div className="flex justify-between px-6 py-8">
        <p className="text-[24px] font-[600] text-[#09090b]">Upcoming</p>
        <button className="font-[500] text-[14px] text-[#09090b]">
          See more..
        </button>
      </div>

      <div className="flex">
        <MovieCard />
        <MovieCard />
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  );
}
