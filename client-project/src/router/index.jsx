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
import VerificationOrderClient from "../pages/client/CompletedOrder/VerificationOrderClientPage";
import PaymentPandingClientPage from "../pages/client/CompletedOrder/PaymentPandingClientPage";
import PaymentCompletedClientPage from "../pages/client/CompletedOrder/PaymentCompletedClientPage";
import VerificatonOrderWorkerPage from "../pages/worker/CompletedOrder/VertifikasiOrderWorkerPage";
import PaymentPendingWorkerPage from "../pages/worker/CompletedOrder/PaymentPendingPage";
import PaymentCompletedWorkerPage from "../pages/worker/CompletedOrder/PaymentWorkerPage";

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
      {
        path: "verification-order-worker",
        element: <VerificatonOrderWorkerPage />,
      },
      {
        path: "payment-pending-worker",
        element: <PaymentPendingWorkerPage />,
      },
      {
        path: "payment-completed-worker",
        element: <PaymentCompletedWorkerPage />,
      },
      {
        path: "verification-order-client",
        element: <VerificationOrderClient />,
      },
      {
        path: "payment-pending-client",
        element: <PaymentPandingClientPage />,
      },
      {
        path: "payment-completed-client",
        element: <PaymentCompletedClientPage />,
      },
    ],
  },
]);

export default router;
