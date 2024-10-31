import { Link, Outlet, useLocation } from "react-router-dom";
import NavBar from "./nav.section";
import { useAuth } from "@/contexts/auth-context";
import { path } from "@/utils/path.util";

export default function AdminLayout() {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <div>Loading...</div>;

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
      <main className="grid md:col-span-9 md:grid-cols-9 lg:col-span-10 lg:grid-cols-10">
        <Outlet />
      </main>
    </div>
  );
}
