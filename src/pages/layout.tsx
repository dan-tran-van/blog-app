import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import { Button } from "@nextui-org/react";
import Logo from "@/components/Logo/Logo";
import {
  ArrowUpTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "@/contexts/auth-context";
import { path } from "@/utils/path.util";

export default function Layout() {
  const { user, logOut } = useAuth();
  const location = useLocation();
  return (
    <>
      <div
        id="top-bar"
        className="grid grid-cols-3 items-center border-b border-b-slate-200 p-3"
      >
        <div id="logo">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <h1 className="text-center text-xl font-bold">
          <Link to={"/"}>OrigamiGo Newsletter</Link>
        </h1>
        <div>
          <ul className="flex flex-row items-center justify-end gap-4">
            <li>
              <Button variant="light" isIconOnly>
                <MagnifyingGlassIcon className="size-[20px]" />
              </Button>
            </li>
            <li>
              <Button variant="light" isIconOnly>
                <ArrowUpTrayIcon className="size-[20px]" />
              </Button>
            </li>

            {!user ? (
              <>
                <li>
                  <Link to={"/signup"}>
                    <Button
                      variant="solid"
                      className="bg-[#6540df] font-bold text-white"
                    >
                      Subscribe
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to={`${path.signIn()}?redirect=${location.pathname}`}>
                    <Button variant="light">Sign in</Button>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Button variant="light" onClick={logOut}>
                  Log out
                </Button>
              </li>
            )}
            {user?.role === "ADMIN" && (
              <li>
                <Link to={path.admin.__base}>
                  <Button
                    variant="solid"
                    className="bg-[#6540df] font-bold text-white"
                  >
                    Admin
                  </Button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
