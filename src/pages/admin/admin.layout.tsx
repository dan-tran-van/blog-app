import { Link, Outlet, useLocation } from "react-router-dom";
import NavBar from "./nav.section";
import { useAuth } from "@/contexts/auth-context";
import { path } from "@/utils/path.util";

export default function AdminLayout() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <div>
        <Link to={`${path.signIn()}?redirect=${location.pathname}`}>
          Sign In
        </Link>
      </div>
    );
  }

  if (user.role !== "ADMIN") {
    return <div>You don't have permission to access this page</div>;
  }
  return (
    <div className="grid grid-cols-12">
      <div className="md:col-span-3 lg:col-span-2">
        <NavBar />
      </div>
      <main className="md:col-span-9 lg:col-span-10">
        <Outlet />
      </main>
    </div>
  );
}
