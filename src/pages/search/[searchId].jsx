import { SearchPage } from "@/components/search/SearchPage";
import { getSearch } from "@/lib/api/getSearch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const searchId = router.query.searchId;
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (!searchId) return;

    const allSearch = async () => {
      const response = await getSearch(searchId);

      console.log(response);
      setSearch(response);
    };

    allSearch();
  }, [searchId]);

  return (
    <div>
      <SearchPage search={search} />
    </div>
  );
}
