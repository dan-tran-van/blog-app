import { CirclePlusIcon } from "lucide-react";
import { ReactNode } from "react";
import { NavLink, useMatch } from "react-router-dom";

export default function AdminNavButton({
  to,
  icon,
  children,
  create,
}: {
  to: string;
  icon: ReactNode;
  children: ReactNode;
  create?: boolean;
}) {
  return (
    <>
      <NavLink
        to={to}
        end
        className={({ isActive }) => {
          return isActive
            ? "relative box-border flex h-[44px] min-h-11 w-full cursor-pointer items-center gap-2 rounded-large bg-default-100 px-3 py-1.5 subpixel-antialiased outline-none tap-highlight-transparent hover:bg-default/40 hover:text-default-foreground"
            : "relative box-border flex h-[44px] min-h-11 w-full cursor-pointer items-center gap-2 rounded-large px-3 py-1.5 subpixel-antialiased outline-none tap-highlight-transparent hover:bg-default/40 hover:text-default-foreground hover:transition-colors";
        }}
      >
        {icon}
        <span
          className={`flex-1 truncate text-small font-medium text-default-500 ${useMatch(to) ? "text-foreground" : ""}`}
        >
          {children}
        </span>
        {create && (
          <CirclePlusIcon
            size={24}
            className="text-default-400"
            strokeWidth={1}
          />
        )}
      </NavLink>
    </>
  );
}
