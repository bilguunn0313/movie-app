import { GenrePage } from "@/components/genre/GenrePage";
import { getGenre } from "@/lib/api/getGenre";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const genreName = router.query.genreName;
  const [genre, setGenre] = useState({});

  useEffect(() => {
    if (!genreName) return;

    const allGenre = async () => {
      const data = await getGenre(genreName);
      setGenre(data);
    };

    allGenre();
  }, [genreName]);

  return <div>Genre</div>;
}
