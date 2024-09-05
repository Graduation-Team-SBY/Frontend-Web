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
import DetailOrderPage from "../pages/client/DetailOrderPage";
import UpdateProfilePage from "../pages/client/UpdateProfilePage";
import AddOrderGmapsPage from "../pages/client/AddOrderGmapsPage";
import ProfilePage from "../pages/client/ProfilePage";
import DealOrdersPage from "../pages/client/DealOrdersPage";

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
        path: "orders-deals",
        element: <DealOrdersPage />,
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
        path: "edit-profile-worker",
        element: <EditProfileWorkerPage />,
      },
      {
        path: "profile-worker",
        element: <ProfileWorkerPage />,
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
      {
        path: "chat-worker",
        element: <RoamChatWorkerPage />,
      },
    ],
  },
]);

export default router;
