import { Blog } from "@/types/blog.type";
import ActionButton from "../ActionButton/ActionButton";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

export default function ShareButton({ blog }: { blog: Blog }) {
  return (
    <ActionButton>
      <ArrowUpTrayIcon className="size-[14px] stroke-[2px] text-[#868787]" />
    </ActionButton>
  );
}
