import { Suspense, lazy } from 'react';
// import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Student

// const EmpleadosBase = Loader(lazy(() => import('src/content/administration/employee/base')));
// const EmpleadosNew = Loader(lazy(() => import('src/content/administration/employee/new')));
// const EmpleadosModify = Loader(lazy(() => import('src/content/administration/employee/modify')));
// const ClientesBase = Loader(lazy(() => import('src/content/administration/client/base')));
// const ClientesNew = Loader(lazy(() => import('src/content/administration/client/new')));
// const ClientesModify = Loader(lazy(() => import('src/content/administration/client/modify')));
// const InventoryBase = Loader(lazy(() => import('src/content/administration/inventory/base')));
// const InventoryNew = Loader(lazy(() => import('src/content/administration/inventory/new')));
// const InventoryModify = Loader(lazy(() => import('src/content/administration/inventory/modify')));
// const MachineBase = Loader(lazy(() => import('src/content/administration/machine/base')));
// const MachineNew = Loader(lazy(() => import('src/content/administration/machine/new')));
// const MachineModify = Loader(lazy(() => import('src/content/administration/machine/modify')));
// const ProductBase = Loader(lazy(() => import('src/content/administration/product/base')));
// const ProductNew = Loader(lazy(() => import('src/content/administration/product/new')));
// const ProductModify = Loader(lazy(() => import('src/content/administration/product/modify')));
// const SlotRoomBase = Loader(lazy(() => import('src/content/administration/slot_room/base')));
// const SlotRoomNew = Loader(lazy(() => import('src/content/administration/slot_room/new')));
// const SlotRoomModify = Loader(lazy(() => import('src/content/administration/slot_room/modify')));

// const PagoManualManager = Loader(lazy(() => import('src/content/services_to_client/pago_manual/manager')));
// const PedidoBarManager = Loader(lazy(() => import('src/content/services_to_client/pedidos_del_bar/manager')));

// const ClientTypeBase = Loader(lazy(() => import('src/content/awards_program/client_type/base')));
// const ClientTypeNew = Loader(lazy(() => import('src/content/awards_program/client_type/new')));
// const ClientTypeModify = Loader(lazy(() => import('src/content/awards_program/client_type/modify')));
// const Parameters = Loader(lazy(() => import('src/content/awards_program/parameters/base')));


// const StatisticsClient = Loader(lazy(() => import('src/content/statistics/client/base')));
// const StatisticsClientDetail = Loader(lazy(() => import('src/content/statistics/client/modify')));
// // const Courses = Loader(lazy(() => import('src/content/student/courses')));
// const FeedbackPostClass = Loader(lazy(() => import('src/content/student/temp')));
// const Reservations = Loader(
//   lazy(() => import('src/content/student/reservations'))
// );
// const AssociatedProfile = Loader(
//   lazy(() => import('src/content/student/associatedProfile'))
// );

// const Classes = Loader(lazy(() => import('src/content/student/classes')));
// const VideoConference = Loader(lazy(() => import('src/components/Room')));
// const Chat = Loader(lazy(() => import('src/content/chat')));
// const AuthRoom = Loader(lazy(() => import('src/components/AuthRoom')));

 const Busqueda  = Loader(lazy(() => import('src/content/administration/search/base')));
// const Resultado  = Loader(lazy(() => import('src/content/administration/search/new')));
const managerRoutes = [
  {
    path: '/',
    element: <Busqueda />
  },
  {
    path: 'results',
    element: <Busqueda />
  },
  // {
  //   path:'employee/new',
  //   element:<EmpleadosNew />
  // },
  // {
  //   path:'employee/modify',
  //   element:<EmpleadosModify />
  // },
  // {
  //   path: 'client',
  //   element: <ClientesBase />
  // },
  // {
  //   path:'client/new',
  //   element:<ClientesNew />
  // },
  // {
  //   path:'client/modify',
  //   element:<ClientesModify />
  // },
  // {
  //   path: 'inventory',
  //   element: <InventoryBase />
  // },
  // {
  //   path: 'inventory/new',
  //   element: <InventoryNew />
  // },
  // {
  //   path: 'inventory/detail',
  //   element: <InventoryModify />
  // },
  // {
  //   path: 'machine',
  //   element: <MachineBase />
  // },
  // {
  //   path: 'machine/new',
  //   element: <MachineNew />
  // },
  // {
  //   path: 'machine/modify',
  //   element: <MachineModify />
  // },
  // {
  //   path: 'product',
  //   element: <ProductBase />
  // },
  // {
  //   path: 'product/new',
  //   element: <ProductNew />
  // },
  // {
  //   path: 'product/modify',
  //   element: <ProductModify />
  // },
  // {
  //   path: 'slot_room',
  //   element: <SlotRoomBase />
  // },
  // {
  //   path: 'slot_room/new',
  //   element: <SlotRoomNew />
  // },
  // {
  //   path: 'slot_room/modify',
  //   element: <SlotRoomModify />
  // },
  // {
  //   path:'hand_pay',
  //   element:<PagoManualManager/>
  // },
  // {
  //   path:'bar_order',
  //   element:<PedidoBarManager/>
  // },
  // {
  //   path:'nclient_type',
  //   element:<ClientTypeBase/>
  // },
  // {
  //   path:'nclient_type/new',
  //   element:<ClientTypeNew/>
  // },
  // {
  //   path:'nclient_type/modify',
  //   element:<ClientTypeModify/>
  // },
  // {
  //   path:'parameters',
  //   element:<Parameters/>
  // },
  // {
  //   path:'statistics/client',
  //   element:<StatisticsClient/>
  // },
  // {
  //   path:'statistics/client/detail',
  //   element:<StatisticsClientDetail/>
  // }
  // ,
  // {
  //   path: 'temp/:classId',
  //   element: <FeedbackPostClass />
  // },
  // {
  //   path: 'reservations',
  //   element: <Reservations />
  // },
  // {
  //   path: 'profile/:idAssociated',
  //   element: <AssociatedProfile />
  // },
  // {
  //   path: 'classes/',
  //   element: <Classes />
  // },
  // {
  //   path: 'room/:roomId/:classId',
  //   element: <AuthRoom><VideoConference/></AuthRoom>
  // },
  // {
  //   path: 'chat',
  //   element: <Chat />
  // },
];

export default managerRoutes;