import AdminNavButton from "@/components/AdminNavButton/AdminNavButton";
import Logo from "@/components/Logo/Logo";
import { useAuth } from "@/contexts/auth-context";
import { path } from "@/utils/path.util";
import { DatabaseIcon, House, LogInIcon, LogOutIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
export default function NavBar() {
  const { user, logOut } = useAuth();
  return (
    <nav className="flex flex-col">
      <div>
        <NavLink
          className={"flex flex-row items-center gap-2"}
          to={path.admin.__base}
        >
          <Logo />
          <span>OrigamiGo Admin</span>
        </NavLink>
      </div>
      <ul className="flex flex-col">
        <AdminNavButton to={path.admin.__base}>
          <House size={16} />
          <span>Overview</span>
        </AdminNavButton>

        <AdminNavButton to={path.admin.manage()}>
          <DatabaseIcon size={16} />
          <span>Manage</span>
        </AdminNavButton>
        {user ? (
          <div
            className="flex flex-row items-center gap-2"
            onClick={() => logOut()}
          >
            <LogOutIcon size={16} />
            <span>Log out</span>
          </div>
        ) : (
          <Link to={path.signIn()}>
            <div className="flex flex-row items-center gap-2">
              <LogInIcon size={16} />
              <span>Log in</span>
            </div>
          </Link>
        )}
      </ul>
    </nav>
  );
}
