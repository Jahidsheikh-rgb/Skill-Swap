import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

import Layout from "../Layouts/Layout";
import Erroepage from "../Errors/Erroepage";
import Home from "../pages/Home";
import Signup from "../pages/Signup";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Erroepage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
    ],
  },
]);

export default AppRoutes;


 


