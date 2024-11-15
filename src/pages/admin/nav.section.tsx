import AdminNavButton from "@/components/AdminNavButton/AdminNavButton";
import Logo from "@/components/Logo/Logo";
import { useAuth } from "@/contexts/auth-context";
import { path } from "@/utils/path.util";
import {
  HouseIcon,
  LibraryIcon,
  LogOutIcon,
  MailCheckIcon,
  UsersIcon,
} from "lucide-react";
import { NavLink, useMatch } from "react-router-dom";
export default function NavBar() {
  const { logOut } = useAuth();
  return (
    <>
      <div className="flex items-center gap-2 px-2">
        <Logo className="flex h-8 w-8 items-center justify-center"></Logo>
        <span className="text-small font-bold uppercase">OrigamiGO</span>
      </div>
      <div className="h-full max-h-full overflow-y-auto py-[10vh]">
        <div className="relative flex w-full list-none flex-col gap-1 p-1">
          <nav className="flex w-full flex-col items-center gap-0.5 outline-none">
            <NavLink
              to={path.admin.__base}
              end
              className={({ isActive }) => {
                return isActive
                  ? "relative box-border flex h-[44px] min-h-11 w-full cursor-pointer items-center gap-2 rounded-large bg-default-100 px-3 py-1.5 subpixel-antialiased outline-none tap-highlight-transparent hover:bg-default/40 hover:text-default-foreground"
                  : "relative box-border flex h-[44px] min-h-11 w-full cursor-pointer items-center gap-2 rounded-large px-3 py-1.5 subpixel-antialiased outline-none tap-highlight-transparent hover:bg-default/40 hover:text-default-foreground hover:transition-colors";
              }}
            >
              <HouseIcon
                size={24}
                color={useMatch(path.admin.__base) ? "#11181c" : "#71717a"}
              />
              <span
                className={`flex-1 truncate text-small font-medium text-default-500 ${useMatch(path.admin.__base) ? "text-foreground" : ""}`}
              >
                Home
              </span>
            </NavLink>
            <AdminNavButton
              icon={
                <LibraryIcon
                  size={24}
                  color={useMatch(path.admin.blogs()) ? "#11181c" : "#71717a"}
                />
              }
              to={path.admin.blogs()}
              create
            >
              Blogs
            </AdminNavButton>
            <AdminNavButton
              icon={
                <UsersIcon
                  size={24}
                  color={useMatch(path.admin.users()) ? "#11181c" : "#71717a"}
                />
              }
              to={path.admin.users()}
            >
              Users
            </AdminNavButton>
            <AdminNavButton
              icon={
                <MailCheckIcon
                  size={24}
                  color={
                    useMatch(path.admin.subscriptions()) ? "#11181c" : "#71717a"
                  }
                />
              }
              to={path.admin.subscriptions()}
            >
              Subscriptions
            </AdminNavButton>
            <div
              onClick={logOut}
              className="relative box-border flex h-[44px] min-h-11 w-full cursor-pointer items-center gap-2 rounded-large px-3 py-1.5 subpixel-antialiased outline-none tap-highlight-transparent hover:bg-default/40 hover:text-default-foreground hover:transition-colors"
            >
              <LogOutIcon size={24} color={"#71717a"} />
              <span
                className={`flex-1 truncate text-small font-medium text-default-500`}
              >
                Log out
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
