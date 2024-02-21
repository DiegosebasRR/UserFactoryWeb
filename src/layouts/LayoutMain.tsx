import { CommandMenu } from "@/components/CommandMenu";
import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";
import SiteIcon from "@/components/SiteIcon";
import { Sidebar } from "@/components/sidebar";
import { SidebarSecundary } from "@/components/sidebarSecundary";

import { Outlet, useLocation } from "react-router-dom";

const LayoutMain = () => {
  const location = useLocation();
  const nameLocation = location.pathname.split("/")[1];
  return (
    <div>
      <header className="bg-primary shadow-2xl+ shadow-primary sticky top-0 w-full  z-50">
        <nav className="px-2 max-w-screen-xl m-auto py-4  flex justify-between items-center flex-col h-[9.5rem] sm:h-[5.5rem] sm:flex-row ">
          <SiteIcon />
          <div className="flex w-full  gap-2  justify-between">
            <CommandMenu />
            <ModeToggle />
          </div>
        </nav>
      </header>
      {nameLocation && (
        <div className="m-auto flex">
          <div className="min-w-72  hidden lg:block border-r-zinc-200 border-r-2">
            <Sidebar />
          </div>
          <div className="w-full py-10 px-16  ">
            <Outlet />
          </div>
          <div className="border-l-zinc-200 border-l-2 w-[31rem]  hidden xl:block">
            <SidebarSecundary />
          </div>
        </div>
      )}
      {!nameLocation && (
        <div className=" max-w-screen-xl m-auto flex">
          <div className="w-full p-10 ">
            <Outlet />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default LayoutMain;
