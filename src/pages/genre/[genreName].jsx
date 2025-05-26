import { GenrePage } from "@/components/genre/GenrePage";
import { getGenre } from "@/lib/api/getGenre";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const genreId = router.query.id;
  const [genre, setGenre] = useState({});

  useEffect(() => {
    if (!genreId) return;

    const allGenre = async () => {
      const data = await getGenre(genreId);
      setGenre(data);
    };

    allGenre();
  }, [genreId]);

  return <div></div>;
}
