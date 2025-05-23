import { getTrailer } from "@/lib/api/getTrailer";
import { useEffect, useState } from "react";
import { DetailsHeader } from "./DetailsHeader";
import YouTube from "react-youtube";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export const DetailsTrailer = ({ videoId }) => {
  const [trailerYt, setTrailerYt] = useState([]);

  useEffect(() => {
    try {
      const watchTrailer = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${videoId}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        const trailer = trailerYt.find((video) => {
          video.name === "Official Trailer";
        });
        if (trailer) {
          trailer.key;
        }
        setTrailerYt(trailer);
        return data;
      };
    } catch (error) {
      console.log(error);
    }
  }, [videoId]);
  console.log("trailer", trailerYt);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <YouTube videoId={trailerYt} opts={opts} onReady={_onReady} />;
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
