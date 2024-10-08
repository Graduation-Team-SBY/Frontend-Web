import { createBrowserRouter, redirect } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import ClientRegisterPage from '../pages/ClientRegisterPage';
import WorkerRegisterPage from '../pages/WorkerRegisterPage';
import MainClientLayout from '../pages/layout/MainClientLayout';
import HomeClientPage from '../pages/client/HomeClientPage';
import MyOrdersPage from '../pages/client/MyOrdersPage';
import AddOrderPage from '../pages/client/AddOrderPage';
import AddOrderGmapsPage from '../pages/client/AddOrderGmapsPage';
import MainWorkerLayout from '../pages/layout/MainWorkerLayout';
import HomepageWorker from '../pages/worker/Home/HomepageWorker';
import ProfilePage from '../pages/client/ProfilePage';
import UpdateProfilePage from '../pages/client/UpdateProfilePage';
import ProfileWorkerPage from '../pages/worker/Profile/ProfileWorkerPage';
import DetailOrderPage from '../pages/client/DetailOrderPage';
import UpdateProfileWorkerPage from '../pages/worker/Profile/UpdateProfileWorkerPage';

import CurrectJobsPage from '../pages/worker/Jobs/CurrenctJobPage';
import DetailJobWorkerPage from '../pages/worker/Jobs/DetailCurrenctJobPage';
import VerificationOrderWorkerPage from '../pages/worker/CompletedOrder/VertifikasiOrderWorkerPage';

import HistoryOrdersPage from '../pages/client/HistoryOrdersPage';

import DetailJobPage from '../pages/worker/DetailJobPage';
import ReviewOrderClient from '../pages/client/CompletedOrder/ReviewOrderClientPage';
import PaymentConfirmClientPage from '../pages/client/CompletedOrder/PaymentConfirmClientPage';
import RoomChatJaluPage from '../pages/client/Chat/RoomChatJaluPage';
import RoomChatYasaPage from '../pages/worker/Chat/RoomChatYasaPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    loader: () => {
      if (localStorage.access_token) return redirect(`/${localStorage.role}`);
      return null;
    },
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) return redirect(`/${localStorage.role}`);
      return null;
    },
  },
  {
    path: '/jalu-register',
    element: <ClientRegisterPage />,
    loader: () => {
      if (localStorage.access_token) return redirect(`/${localStorage.role}`);
      return null;
    },
  },
  {
    path: '/yasa-register',
    element: <WorkerRegisterPage />,
    loader: () => {
      if (localStorage.access_token) return redirect(`/${localStorage.role}`);
      return null;
    },
  },
  {
    path: '/jalu',
    element: <MainClientLayout />,
    loader: () => {
      if (!localStorage.access_token) return redirect('/');
      if (localStorage.role !== 'jalu')
        return redirect(`/${localStorage.role}`);
      return null;
    },
    children: [
      {
        path: '',
        element: <HomeClientPage />,
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <ProfilePage />,
          },
          {
            path: 'update',
            element: <UpdateProfilePage />,
          },
        ],
      },
      {
        path: 'order',
        children: [
          {
            path: 'add-cleaning',
            element: <AddOrderPage />,
          },
          {
            path: 'add-shopping',
            element: <AddOrderGmapsPage />,
          },
          {
            path: 'my',
            element: <MyOrdersPage />,
          },
          {
            path: 'history',
            element: <HistoryOrdersPage />,
          },
          {
            path: ':id',
            element: <DetailOrderPage />,
          },
          {
            path: ':id/chat',
            element: <RoomChatJaluPage />,
          },
          {
            path: ':id/confirmation',
            element: <PaymentConfirmClientPage />,
          },
          {
            path: ':id/review',
            element: <ReviewOrderClient />,
          },
        ],
      },
    ],
  },
  {
    path: '/yasa',
    element: <MainWorkerLayout />,
    loader: () => {
      if (!localStorage.access_token) return redirect('/');
      if (localStorage.role !== 'yasa')
        return redirect(`/${localStorage.role}`);
      return null;
    },
    children: [
      {
        path: '',
        element: <HomepageWorker />,
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <ProfileWorkerPage />,
          },
          {
            path: 'update',
            element: <UpdateProfileWorkerPage />,
          },
        ],
      },
      {
        path: 'order',
        children: [
          {
            path: ':id',
            element: <DetailJobPage />,
          },
          {
            path: 'jobs',
            element: <CurrectJobsPage />,
          },
          {
            path: 'jobs/:id',
            element: <DetailJobWorkerPage />,
          },
          {
            path: ':id/chat',
            element: <RoomChatYasaPage />,
          },
          {
            path: 'verification',
            element: <VerificationOrderWorkerPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
