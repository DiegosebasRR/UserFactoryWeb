import { MENU_ITEMS } from "@/constants";

import { SidebarItem } from "./SidebarItem";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function Sidebar() {
  return (
    <nav className="fixed px-4  w-72 h-screen">
      {MENU_ITEMS.map((data, index) => (
        <SidebarItem key={index} {...data} />
      ))}
      <TooltipProvider delayDuration={10}>
        <Tooltip>
          <TooltipTrigger
            asChild
            className=" top-[40rem] xl:top-[50rem] h-10 "
          ></TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
}
