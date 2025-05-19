import { FooterSection } from "@/components/FooterSection";
import { HeaderSection } from "@/components/HeaderSection";
import { MovieCard } from "@/components/MovieCard";
import { MovieCarouselItem } from "@/components/MovieCarouselItem";
export default function Home() {
  return (
    <div className="">
      <HeaderSection />
      <div>
        <MovieCarouselItem />
      </div>
      <div className="flex justify-between px-6 py-8">
        <p className="text-[24px] font-[600] text-[#09090b]">Upcoming</p>
        <button className="font-[500] text-[14px] text-[#09090b]">
          See more..
        </button>
      </div>
      <div className="flex">
        <MovieCard />
        <MovieCard />
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  );
}
