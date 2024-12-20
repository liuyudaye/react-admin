import { createBrowserRouter, RouteObject } from 'react-router';
import user from './modules/user';
import { RouterProvider } from 'react-router';

const Router = () => {
  const routes = [user];
  const router = createBrowserRouter(routes as unknown as RouteObject[]);

  return <RouterProvider router={router} />;
};

export default Router;
