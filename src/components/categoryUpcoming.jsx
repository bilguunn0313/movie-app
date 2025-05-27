import { getUpcomingMovies } from "@/lib/api/getUpcomingMovies";
import { useEffect, useState } from "react";

export const categoryUpcoming = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const getCatUpcoming = async () => {
      const response = await getUpcomingMovies();
      setUpcoming(response?.results);
    };
    getCatUpcoming();
  }, []);
  return <div></div>;
};
