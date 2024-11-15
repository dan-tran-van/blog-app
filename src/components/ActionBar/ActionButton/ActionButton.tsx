import { ReactEventHandler, ReactNode } from "react";

export default function ActionButton({
  onClick,
  children,
}: {
  onClick?: ReactEventHandler;
  children: ReactNode;
}) {
  return (
    <div
      onClick={onClick}
      className="flex flex-row items-center justify-center gap-1 rounded-md px-[6px] py-1 text-[#868787] hover:bg-[#f0f0f0]"
    >
      {children}
    </div>
  );
}
