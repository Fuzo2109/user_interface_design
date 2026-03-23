import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ProjectList } from "./pages/ProjectList";
import { ProjectDetail } from "./pages/ProjectDetail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects",
    Component: ProjectList,
  },
  {
    path: "/project/:id",
    Component: ProjectDetail,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);
