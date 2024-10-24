import { ReactNode } from "react";

export default function ActionButton({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row items-center justify-center gap-1 rounded-md px-[6px] py-1 text-[#868787] hover:bg-[#f0f0f0]">
      {children}
    </div>
  );
}
