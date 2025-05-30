import { FooterSection } from "@/components/FooterSection";
import { HeaderSection } from "@/components/HeaderSection";
import { MovieCarousel } from "@/components/MovieCarousel";
import { PopularMovie } from "@/components/PopularMovie";
import { TopRatedMovie } from "@/components/TopRatedMovie";
import { Upcoming } from "@/components/Upcoming";
import { useEffect, useState } from "react";

export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  // const [upcomingMovie, setUpcomingMovie] = useState([]);
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

      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  // const getUpcoming = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/upcoming?language=en-US&page=1`,
  //       {
  //         method: "GET",
  //         headers: {
  //           accept: "application/json",
  //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
  //         },
  //       }
  //     );
  //     const upcomingMovies = await response.json();
  //     setUpcomingMovie(upcomingMovie.results);
  //     console.log("upcoming", upcomingMovies);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getNowPlayingMovies();
    // getUpcoming();
  }, []);
  return (
    <div className="">
      <HeaderSection />
      <MovieCarousel nowPlayingMovie={nowPlayingMovie} />
      <Upcoming />
      <PopularMovie />
      <TopRatedMovie />
      {/* <FooterSection /> */}
    </div>
  );
}
