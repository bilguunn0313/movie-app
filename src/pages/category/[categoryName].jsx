import { getCategory } from "@/lib/api/getCategory";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const categoryId = router.query.id;
  const [category, setCategory] = useState({});

  useEffect(() => {
    if (!categoryId) return;

    const allCategory = async () => {
      const data = await getCategory(categoryId);
      setGenre(data);
    };

    allCategory();
  }, [categoryId]);

  return <div></div>;
}
