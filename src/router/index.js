import SuspenseLoader from 'src/components/SuspenseLoader';

import Authenticated from 'src/components/Authenticated';
import { Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
import BaseLayout from 'src/layouts/BaseLayout';
import accountRoutes from './account';
import baseRoutes from './base';
import studentRoutes from './student';
import associatedRoutes from './associated';
import memberRoutes from './member';
import adminRoutes from './admin';
import managerRoutes from './manager';
import employeeOpeRoutes from './employeeOpe';
import raffleRoutes from'./raffle';


// import { Navigate } from 'react-router-dom';


const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Resultado  = Loader(lazy(() => import('src/content/administration/search/modify')));

const router = [
  {
  path:'raffle_ticket',
  children: raffleRoutes
  },
  {
    path: 'bar_order',
    children: accountRoutes
  },
  {
    path: '*',
    element: <BaseLayout />,
    children: baseRoutes
  },
  // {
  //   path: 'bar_order',
  //   children: accountRoutes
  // },
  {
    path: 'aim',
    element: (
      <Authenticated>
        <AccentHeaderLayout />
      </Authenticated>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="student" replace />
      },
      {
        path: 'student',
        children: studentRoutes
      },
      {
        path: 'associated',
        children: associatedRoutes
      },
      {
        path: 'member',
        children: memberRoutes
      },
      {
        path: 'admin',
        children: adminRoutes
      }
    ]
  },
  {
    path: 'search',
    element: (
      <Authenticated>
        <AccentHeaderLayout />
      </Authenticated>
    ),
    children: [
      {
        path: '/',
        children: managerRoutes
      }
      ,
      {
        path: 'results',
        element: <Resultado />
      },
      {
        path:'employeeOpe',
        children:employeeOpeRoutes
      }
    ]
  }
];

export default router;
