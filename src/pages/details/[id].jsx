import { Details } from "@/components/details/Details";
import { getMovieById } from "@/lib/api/getMovieById";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const movieId = router.query.id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movieId) return; // movie id bhguio bol zogs

    const getMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };

    getMovie();
  }, [movieId]);

  return (
    <div>
      <Details movie={movie} id={movie.id} />
    </div>
  );
}
