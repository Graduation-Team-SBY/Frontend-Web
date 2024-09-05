import { createBrowserRouter, redirect } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../pages/layout/MainLayout";
import HomeClientPage from "../pages/client/HomeClientPage";
import MyOrders from "../pages/client/MyOrdersPage";
import AddOrderPage from "../pages/client/AddOrderPage";
import HomepageWorker from "../pages/worker/Home/HomepageWorker";
import RoamChatWorkerPage from "../pages/worker/Chat/RoamChatWorkerPage";
import EditProfileWorkerPage from "../pages/worker/Profile/EditProfileWorkerPage";
import ProfileWorkerPage from "../pages/worker/Profile/ProfileWorkerPage";

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
        element: <HomepageWorker />,
      },
      {
        path: "editProfile",
        element: <EditProfileWorkerPage />,
      },
      {
        path: "profileWorker",
        element: <ProfileWorkerPage />,
      },
    ],
  },
]);

export default router;
