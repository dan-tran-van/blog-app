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
    <div className="flex h-screen items-center justify-start">
      <div className="h-dvh">
        <div className="h-full w-72 border-r-small border-divider p-6">
          <NavBar />
        </div>
      </div>
      <main className="h-full flex-1">
        <Outlet />
      </main>
    </div>
  );
}
