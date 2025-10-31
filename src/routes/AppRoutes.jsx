import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

import Layout from "../Layouts/Layout";
import Erroepage from "../Errors/Erroepage";
import Home from "../pages/Home";

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
    ],
  },
]);

export default AppRoutes;


 


