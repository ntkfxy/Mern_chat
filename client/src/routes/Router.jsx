import { createBrowserRouter } from "react-router";

import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../components/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
export default router;
