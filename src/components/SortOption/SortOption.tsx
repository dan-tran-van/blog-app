import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function SortOption({
  path,
  query,
  children,
  defaultOption,
}: {
  path: string;
  query: string;
  children: ReactNode;
  defaultOption?: boolean;
}) {
  const location = useLocation();

  return (
    <div className="rounded-[50%]">
      <NavLink
        to={`${path}?sort=${query}`}
        className={
          `${location.pathname}${location.search}` !== `${path}?sort=${query}`
            ? !defaultOption || location.search !== ""
              ? "text-gray-500"
              : "text-blue-300"
            : "text-blue-300"
        }
      >
        {children}
      </NavLink>
    </div>
  );
}
