import { HeaderSection } from "@/components/HeaderSection";
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
import { Button } from "@/components/ui/button";
import { CatUpcoming } from "@/components/CatUpcoming";
import { FooterSection } from "@/components/FooterSection";
import { CatPopular } from "@/components/CatPopular";
import { CatTopRated } from "@/components/CatTopRated";
import { CatSimiliar } from "@/components/CatSimiliar";
import { parseAsInteger, useQueryState } from "nuqs";

export default function Page() {
  const router = useRouter();
  const categoryName = router.query.categoryName;
  const [category, setCategory] = useState({});
  const [currentPage, setCurrentPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1)
  );

  useEffect(() => {
    if (!categoryName) return;

    const allCategory = async () => {
      const data = await getCategory(categoryName, currentPage);
      console.log("category", data);
      setCategory(data);
    };

    allCategory();
  }, [categoryName, currentPage]);

  return (
    <div>
      <HeaderSection />
      {/* {(categoryName === "CatUpcoming" && <CatUpcoming data={category} />) ||
        (categoryName === "CatTopRated" && <CatTopRated data={category} />) ||
        (categoryName === "CatPopular" && <CatPopular data={category} />) ||
        (categoryName === "CatSimiliar" && <CatSimiliar data={category} />)} */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
            />
          </PaginationItem>

          {[1, 2, 3].map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink onClick={() => setCurrentPage(pageNumber)}>
                <Button
                  variant={pageNumber === currentPage ? "default" : "outline"}
                  className={
                    pageNumber === currentPage ? "bg-blue-600 text-white" : ""
                  }
                >
                  {pageNumber}
                </Button>
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              onClick={() => {
                if (currentPage < category.total_pages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <FooterSection />
    </div>
  );
}
