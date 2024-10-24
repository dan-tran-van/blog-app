import { Link, Outlet } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import { Button } from "@nextui-org/react";
import Logo from "@/components/Logo/Logo";
import {
  ArrowUpTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Layout() {
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
            <li>
              <Link to={"/"}>
                <Button
                  variant="solid"
                  className="bg-[#6540df] font-bold text-white"
                >
                  Subscribe
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <Button variant="light">Sign in</Button>
              </Link>
            </li>
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
