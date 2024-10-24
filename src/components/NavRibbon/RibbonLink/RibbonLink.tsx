import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function RibbonLink({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "border-b-2 border-b-[#7756e3] p-3 font-semibold text-[#7756e3] hover:cursor-pointer hover:bg-[#f0f0f0]"
          : "p-3 hover:cursor-pointer hover:bg-[#f0f0f0]"
      }
    >
      {children}
    </NavLink>
  );
}
