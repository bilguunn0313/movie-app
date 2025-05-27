import { HeaderSection } from "@/components/HeaderSection";
import { PopularMovie } from "@/components/PopularMovie";
import { TopRatedMovie } from "@/components/TopRatedMovie";
import { Upcoming } from "@/components/Upcoming";
import { getCategory } from "@/lib/api/getCategory";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Page() {
  const router = useRouter();
  const categoryName = router.query.categoryName;
  const [category, setCategory] = useState({});

  useEffect(() => {
    if (!categoryName) return;

    const allCategory = async () => {
      const data = await getCategory(categoryName);
      setCategory(data);
    };

    allCategory();
  }, [categoryName]);

  return (
    <div>
      <HeaderSection />
      {(categoryName === "Upcoming" && <Upcoming data={category} />) ||
        (categoryName === "TopRatedMovie" && (
          <TopRatedMovie data={category} />
        )) ||
        (categoryName === "PopularMovie" && <PopularMovie data={category} />)}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
