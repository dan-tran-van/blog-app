import Banner from "./banner.section";
import NavRibbon from "@/components/NavRibbon/NavRibbon";
import BlogSorter from "@/components/BlogSorter/BlogSorter";
import BlogList from "@/components/BlogList/BlogList";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <NavRibbon />
      <div className="max-w-[932px]">
        <Banner />
        <div className="border-b border-b-gray-300 py-2"></div>
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-2">
            <BlogSorter path={location.pathname} />
            <div>
              <BlogList />
            </div>
          </div>
          <div className="md:col-span-1">{/* call to action */}</div>
        </div>
      </div>
    </div>
  );
}
