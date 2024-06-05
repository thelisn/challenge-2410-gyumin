import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layout/RootLayout";
import Feed from "@/pages/Feed";
import WritePost from "@/pages/WritePost";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Feed /> },
      { path: "write", element: <WritePost /> },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
