import { getSearch } from "@/lib/api/getSearch";
import { useEffect, useState } from "react";

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const posterUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}`;

  useEffect(() => {
    const getDelay = setTimeout(() => {
      const fetchSearch = async () => {
        try {
          setLoading(true);
          const response = await getSearch(query);
          console.log("search", response);
          setResults(response?.results || []);
        } catch (error) {
          console.log(error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      };
      fetchSearch();
    }, 500);

    return () => clearTimeout(getDelay);
  }, [query]);

  return (
    <div>
      {/* <Search className="w-4 h-4 absolute top-7 left-255 right-295 text-[#71717A] " /> */}
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-8 shadow-lg border-transparent rounded-xl md:pr-40 md:pl-6 relative"
      />

      {loading && <p>Searching</p>}

      {!loading && results.length > 0 && (
        <div className="">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="border rounded text-sm cursor-pointer"
            >
              <button>
                <img src={posterUrl.movie?.backdrop_path} alt="" />{" "}
                <p>{movie.title}</p>
              </button>
            </div>
          ))}
        </div>
      )}

      {!loading && query && results.length === 0 && <p>Not found</p>}
    </div>
  );
};
