import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

import Layout from "../Layouts/Layout";
import Erroepage from "../Errors/Erroepage";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Description from "../components/Description";
import MyProfile from "../pages/myprofile";
import Forgetpass from "../pages/Forgetpass";

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
      {
        path: "/Description",
        element: <Description />,
      },
      {
        path: "/MyProfile",
        element: <MyProfile />,
      },
      {
        path: "/Forgetpass",
        element: <Forgetpass />,
      },
    ],
  },
]);

export default AppRoutes;


 


