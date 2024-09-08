import { createBrowserRouter, redirect } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import ClientRegisterPage from "../pages/ClientRegisterPage";
import WorkerRegisterPage from "../pages/WorkerRegisterPage";
import MainClientLayout from "../pages/layout/MainClientLayout";
import HomeClientPage from "../pages/client/HomeClientPage";
import MyOrdersPage from "../pages/client/MyOrdersPage";
import DealOrdersPage from "../pages/client/DealOrdersPage";
import AddOrderPage from "../pages/client/AddOrderPage";
import AddOrderGmapsPage from "../pages/client/AddOrderGmapsPage";
import MainWorkerLayout from "../pages/layout/MainWorkerLayout";
import HomepageWorker from "../pages/worker/Home/HomepageWorker";
import ProfilePage from "../pages/client/ProfilePage";
import UpdateProfilePage from "../pages/client/UpdateProfilePage";
import ProfileWorkerPage from "../pages/worker/Profile/ProfileWorkerPage";
import DetailOrderPage from "../pages/client/DetailOrderPage";
import UpdateProfileWorkerPage from "../pages/worker/Profile/UpdateProfileWorkerPage";
import DetailJob from "../pages/worker/DetailJob";

// Untuk local storage
// const localStorage.access_token = localStorage.access_token;
const role = localStorage.role;

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    loader: () => {
      if (localStorage.access_token) return redirect(`/${localStorage.role}`);
      return null;
    },
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) return redirect(`/${localStorage.role}`);
      return null;
    },
  },
  {
    path: "/client-register",
    element: <ClientRegisterPage />,
    loader: () => {
      if (localStorage.access_token) return redirect(`/${localStorage.role}`);
      return null;
    },
  },
  {
    path: "/worker-register",
    element: <WorkerRegisterPage />,
    loader: () => {
      if (localStorage.access_token) return redirect(`/${localStorage.role}`);
      return null;
    },
  },
  {
    path: "/client",
    element: <MainClientLayout />,
    loader: () => {
      if (!localStorage.access_token) return redirect("/");
      if (localStorage.role !== "client")
        return redirect(`/${localStorage.role}`);
      return null;
    },
    children: [
      {
        path: "",
        element: <HomeClientPage />,
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            element: <ProfilePage />,
          },
          {
            path: "update",
            element: <UpdateProfilePage />,
          },
        ],
      },
      {
        path: "order",
        children: [
          {
            path: "add-cleaning",
            element: <AddOrderPage />,
          },
          {
            path: "add-shopping",
            element: <AddOrderGmapsPage />,
          },
          {
            path: "my",
            element: <MyOrdersPage />,
          },
          {
            path: "deals",
            element: <DealOrdersPage />,
          },
          {
            path: ":id",
            element: <DetailOrderPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/worker",
    element: <MainWorkerLayout />,
    loader: () => {
      if (!localStorage.access_token) return redirect("/");
      if (localStorage.role !== "worker")
        return redirect(`/${localStorage.role}`);
      return null;
    },
    children: [
      {
        path: "",
        element: <HomepageWorker />,
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            element: <ProfileWorkerPage />,
          },
          {
            path: "update",
            element: <UpdateProfileWorkerPage />,
          },
        ],
      },
      {
        path: "order",
        children: [
          {
            path: ":id",
            element: <DetailJob />
          }
        ]
      }
    ],
  },
]);

export default router;

// import { createBrowserRouter, redirect } from "react-router-dom";
// import RegisterPage from "../pages/RegisterPage";
// import LoginPage from "../pages/LoginPage";
// import MainLayout from "../pages/layout/MainLayout";
// import HomeClientPage from "../pages/client/HomeClientPage";
// import MyOrders from "../pages/client/MyOrdersPage";
// import AddOrderPage from "../pages/client/AddOrderPage";
// import HomepageWorker from "../pages/worker/Home/HomepageWorker";
// import RoamChatWorkerPage from "../pages/worker/Chat/RoamChatWorkerPage";
// import EditProfileWorkerPage from "../pages/worker/Profile/EditProfileWorkerPage";
// import ProfileWorkerPage from "../pages/worker/Profile/ProfileWorkerPage";
// import DetailOrderPage from "../pages/client/DetailOrderPage";
// import UpdateProfilePage from "../pages/client/UpdateProfilePage";
// import AddOrderGmapsPage from "../pages/client/AddOrderGmapsPage";
// import ProfilePage from "../pages/client/ProfilePage";
// import DealOrdersPage from "../pages/client/DealOrdersPage";
// import VerificationOrderClient from "../pages/client/CompletedOrder/VerificationOrderClientPage";
// import PaymentPandingClientPage from "../pages/client/CompletedOrder/PaymentPandingClientPage";
// import PaymentCompletedClientPage from "../pages/client/CompletedOrder/PaymentCompletedClientPage";
// import VerificatonOrderWorkerPage from "../pages/worker/CompletedOrder/VertifikasiOrderWorkerPage";
// import PaymentPendingWorkerPage from "../pages/worker/CompletedOrder/PaymentPendingPage";
// import PaymentCompletedWorkerPage from "../pages/worker/CompletedOrder/PaymentWorkerPage";

// const router = createBrowserRouter([
//   {
//     path: "/register",
//     element: <RegisterPage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "",
//         element: <HomeClientPage />,
//       },
//       {
//         path: "orders",
//         element: <MyOrders />,
//       },
//       {
//         path: "orders-deals",
//         element: <DealOrdersPage />,
//       },
//       {
//         path: "add-order",
//         element: <AddOrderPage />,
//       },
//       {
//         path: "worker",
//         element: <HomepageWorker />,
//       },
//       {
//         path: "edit-profile-worker",
//         element: <EditProfileWorkerPage />,
//       },
//       {
//         path: "profile-worker",
//         element: <ProfileWorkerPage />,
//       },
//       {
//         path: ":id",
//         element: <DetailOrderPage />,
//       },
//       {
//         path: "add-order-gmaps",
//         element: <AddOrderGmapsPage />,
//       },
//       {
//         path: "update-profile",
//         element: <UpdateProfilePage />,
//       },
//       {
//         path: "profile",
//         element: <ProfilePage />,
//       },
//       {
//         path: "chat-worker",
//         element: <RoamChatWorkerPage />,
//       },
//       {
//         path: "verification-order-worker",
//         element: <VerificatonOrderWorkerPage />,
//       },
//       {
//         path: "payment-pending-worker",
//         element: <PaymentPendingWorkerPage />,
//       },
//       {
//         path: "payment-completed-worker",
//         element: <PaymentCompletedWorkerPage />,
//       },
//       {
//         path: "verification-order-client",
//         element: <VerificationOrderClient />,
//       },
//       {
//         path: "payment-pending-client",
//         element: <PaymentPandingClientPage />,
//       },
//       {
//         path: "payment-completed-client",
//         element: <PaymentCompletedClientPage />,
//       },
//     ],
//   },
// ]);

// export default router;
