import LayoutMain from "@/layouts/LayoutMain";
import Home from "@/modules/home/pages/Home";
import Introduction from "@/modules/introduction/pages/Introduction";
import User from "@/modules/user/pages/User";

const appRouter = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/introduction",
        element: <Introduction />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
];

export default appRouter;
