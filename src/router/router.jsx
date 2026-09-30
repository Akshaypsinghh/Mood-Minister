import { createBrowserRouter, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ArtistDashBoard from "../pages/ArtistDashBoard";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "artist-dashBoard",
        element: <ArtistDashBoard />,
      },
    ],
  },
]);
export default router;
