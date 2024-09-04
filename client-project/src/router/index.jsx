import { createBrowserRouter, redirect } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import MainLayout from '../pages/layout/MainLayout';
import HomeClientPage from '../pages/client/HomeClientPage';
import MyOrders from '../pages/client/MyOrdersPage';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomeClientPage />,
      },
      {
        path: 'orders',
        element: <MyOrders />,
      },
    ],
  },
]);

export default router;
