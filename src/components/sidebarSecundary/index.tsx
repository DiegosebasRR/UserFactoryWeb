import { useLocation } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
interface SubItem {
  name: string;
  url: string;
  offset: number;
}
const SUB_ITEMS_USER = [
  {
    name: "Introduction",
    url: "index",
    offset: -130,
  },
  {
    name: "Parametros",
    url: "parametros",
    offset: -130,
  },
  {
    name: "Usuarios aleatorios",
    url: "get",
    offset: -130,
  },
];
export function SidebarSecundary() {
  const location = useLocation();
  const nameLocation = location.pathname.split("/")[1];
  let subItems: SubItem[];
  if (nameLocation === "auth") {
    subItems = SUB_ITEMS_USER;
  } else {
    subItems = [];
  }
  return (
    <>
      <nav className="sticky top-24">
        <ul className="flex flex-col space-y-4">
          {subItems.map((data, index) => (
            <SidebarItem key={index} {...data} />
          ))}
        </ul>
      </nav>
    </>
  );
}
