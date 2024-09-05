import { createBrowserRouter, redirect } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../pages/layout/MainLayout";
import HomeClientPage from "../pages/client/HomeClientPage";
import MyOrders from "../pages/client/MyOrdersPage";
import AddOrderPage from "../pages/client/AddOrderPage";
import HomeWorkerPage from "../pages/worker/HomeWokerPage";
import ChatApp from "../pages/worker/ChatWorker";
import ProfileWorker from "../pages/worker/ProfileWorkerPage";
import EditProfilePage from "../pages/worker/EditProfile";

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
        path: "worker",
        element: <ProfileWorker />,
      },
      {
        path: "editProfile",
        element: <EditProfilePage />
      }
    ],
  },
]);

export default router;
