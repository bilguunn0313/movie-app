import { useEffect, useState } from "react";
import { DetailsHeader } from "./DetailsHeader";
import YouTube from "react-youtube";
import Autoplay from "embla-carousel-autoplay";
import { Play } from "lucide-react";

export const DetailsTrailer = ({ id }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    if (!id) return;
    const getTrailer = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${id}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        const findTrailer = data.results.find(
          (video) =>
            video.site === "Youtube" &&
            video.type === "Trailer" &&
            video.official === true
        );
        if (findTrailer) {
          setVideoId(findTrailer.key);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (id) getTrailer();
  }, [id]);

  console.log("trailer", videoId);

  const opts = {
    height: "561",
    width: "997",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="relative">
      <div>
        <YouTube videoId={videoId} opts={opts} />;
      </div>
    </div>
  );
};

// export const doTrailer = ({ videoId }) => {

//   const playerRef = useRef(null);

//   const onPLayerReady = (event) => {
//     playerRef.current = event.target;
//     console.log("player ready");
//   };
//   const handlePause = () => {
//     if (playerRef.current) {
//       playerRef.current.pauseVideo();
//     }
//   };
//   const handlePlay = () => {
//     if (playerRef.current) {
//       playerRef.current.playVideo();
//     }
//   };
//   const opts = {
//     height: "390",
//     width: "640",
//     playerVars: {
//       Autoplay: 0,
//       controls: 1,
//     },
//   };

//   return (
//     <div>
//       <YouTube
//         videoId={videoId}
//         opts={opts}
//         onReady={onPLayerReady}
//         video={video}
//       />
//       <div>
//         <button onClick={handlePlay}>Play</button>
//         <button onClick={handlePause}>Pause</button>
//       </div>
//     </div>
//   );
// };
{
  /* <button
  onClick={() => setShowTrailer(!showTrailer)}
  className="absolute flex top-1/2 left-1/2 items-center gap-2 rounded-md bg-gray-300 text-black px-4 py-2 hover:bg-gray-100 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
>
  <Play />
  <span>Watch Trailer</span>
</button>;

{
  showTrailer && (
    <div className="absolute top-0 right-40 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-10">
      <div className="relative">
        <button
          onClick={() => setShowTrailer(false)}
          className="absolute -top-4 -right-4 text-white bg-black rounded-full p-1"
        ></button>

        <DetailsTrailer id={movie.id} />
      </div>
    </div>
  );
} */
}
