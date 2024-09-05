import { createBrowserRouter, redirect } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../pages/layout/MainLayout";
import HomeClientPage from "../pages/client/HomeClientPage";
import MyOrders from "../pages/client/MyOrdersPage";
import AddOrderPage from "../pages/client/AddOrderPage";
import DetailOrderPage from "../pages/client/DetailOrderPage";
import UpdateProfilePage from "../pages/client/UpdateProfilePage";
import AddOrderGmapsPage from "../pages/client/AddOrderGmapsPage";
import ProfilePage from "../pages/client/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomeClientPage />,
      },
      {
        path: "orders",
        element: <MyOrders />,
      },
      {
        path: "add-order",
        element: <AddOrderPage />,
      },
      {
        path: ":id",
        element: <DetailOrderPage />,
      },
      {
        path: "add-order-gmaps",
        element: <AddOrderGmapsPage />,
      },
      {
        path: "update-profile",
        element: <UpdateProfilePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
