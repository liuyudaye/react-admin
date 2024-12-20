import { AppRouteObject } from '@/types/router';
import { lazy } from 'react';

const Login = lazy(() => import('@/pages/login/Login'));

const user: AppRouteObject = {
  path: '/login',
  Component: Login,
};

export default user;
