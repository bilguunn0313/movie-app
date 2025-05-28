import { GenrePage } from "@/components/genre/GenrePage";
import { HeaderSection } from "@/components/HeaderSection";
import { getFilterGenre } from "@/lib/api/getFilterGenre";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const genreId = router.query.genreId;
  const [genre, setGenre] = useState({});

  useEffect(() => {
    if (!genreId) return;

    const allGenre = async () => {
      const data = await getFilterGenre(genreId);

      console.log({
        data,
      });

      setGenre(data);
    };

    allGenre();
  }, [genreId]);

  return (
    <div>
      <GenrePage genre={genre} />
    </div>
  );
}
