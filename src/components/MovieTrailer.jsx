import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export const MovieTrailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const getMovieTrailerById = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setTrailer(data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);

  const movieTrailer = trailer?.find(
    (video) => video.name === "Official Trailer"
  );

  console.log({ movieTrailer });

  return (
    <div className="text-white">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-black border-black cursor-pointer"
          >
            <Play /> Watch Trailer
          </Button>
        </DialogTrigger>
        <DialogContent className="min-w-fit bg-transparent border-none mx-auto">
          <div className="w-[996px] h-[561px] ">
            <YouTube
              className="w-full h-full"
              videoId={movieTrailer?.key}
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
