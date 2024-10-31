import { ReactEventHandler, ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function AdminNavButton({
  to,
  onClick,
  children,
}: {
  to?: string;
  onClick?: ReactEventHandler;
  children: ReactNode;
}) {
  return (
    <div>
      {to ? (
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "flex flex-row items-center gap-2 rounded-md bg-slate-200 p-2 hover:bg-gray-100"
              : isPending
                ? ""
                : "flex flex-row items-center gap-2 rounded-md p-2 hover:bg-gray-200"
          }
          to={to}
          end
        >
          {children}
        </NavLink>
      ) : (
        <div
          className="flex flex-row items-center gap-2 rounded-md p-2 hover:cursor-pointer hover:bg-gray-200"
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </div>
  );
}
