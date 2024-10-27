import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function AdminNavButton({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <NavLink className="flex flex-row items-center gap-2" to={to}>
      {children}
    </NavLink>
  );
}
