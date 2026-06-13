import { createBrowserRouter, RouterProvider, RouteObject, Outlet } from 'react-router-dom';
import React from 'react';
import Layout from '@/layout';

function App() {
  // Type the glob imports more precisely
  const pages = import.meta.glob<{
    default: React.ComponentType;
    loader?: () => Promise<unknown>;
    action?: () => Promise<unknown>;
    ErrorBoundary?: React.ComponentType;
  }>('./pages/**/*.{jsx,tsx}', {
    eager: true,
  });

  const childRoutes = Object.keys(pages)
    .map((path): RouteObject | null => {
      const fileName = path.match(/\.\/pages\/(.*)\.(?:jsx|tsx)$/)?.[1];
      if (!fileName) {
        return null;
      }

      const normalizedPathName = fileName.includes('$')
        ? fileName.replace('$', ':')
        : fileName.replace(/\/index/, '');

      const routePath = fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`;
      const Component = pages[path].default;

      return {
        path: routePath,
        element: <Component />,
      };
    })
    .filter((route): route is RouteObject => route !== null);

  const routes: RouteObject[] = [
    {
      path: '/',
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: childRoutes,
    },
  ];

  // Create browser router with properly typed routes
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
