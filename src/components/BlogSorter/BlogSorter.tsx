import SortOption from "../SortOption/SortOption";
import { Button } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function BlogSorter({
  path,
  className,
}: {
  path: string;
  className?: string;
}) {
  return (
    <div
      className={className || `flex flex-row items-center justify-between py-2`}
    >
      <ul className="flex flex-row gap-2">
        <SortOption path={path} defaultOption={true} query="lasted">
          Latest
        </SortOption>
        <SortOption path={path} query="most-commented">
          Comment
        </SortOption>
        <SortOption path={path} query="most-liked">
          Like
        </SortOption>
      </ul>
      <Button variant="light" isIconOnly>
        <MagnifyingGlassIcon className="size-6" />
      </Button>
    </div>
  );
}
