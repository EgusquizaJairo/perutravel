import { Suspense, lazy } from 'react';
// import { Navigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Student

const Mobile = Loader(lazy(() => import('src/content/services_to_client/pago_manual/mobile')));


const employeeOpeRoutes = [
  {
    path: '/',
    element: <Navigate to="mobile" replace />
  },
  {
    path: 'mobile',
    element: <Mobile />
  },
];

export default employeeOpeRoutes;