import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import AboutPage from "../Pages/AboutPage/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "About",
        element: <AboutPage/>,
      },
    ],
  },
]);

export default router;