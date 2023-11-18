// import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
// import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
// import AddTaskIcon from '@mui/icons-material/AddTask';
// import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import CategoryIcon from '@mui/icons-material/Category';
// import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';

const menuItems = [
  {
    heading: '',
    items: [
      {
        name: 'Administración',
        icon: PeopleIcon,
        link: '',
        items:[
            {
                name: 'Clientes',
                icon: KeyboardArrowRightIcon,
                link: '/sapt/manager/client'
            },
            {
                name: 'Empleados',
                icon: KeyboardArrowRightIcon,
                link: '/sapt/manager/employee'
            },
            {
                name: 'Máquinas',
                icon: KeyboardArrowRightIcon,
                link: '/sapt/manager/machine'
            },
            {
                name: 'Salas',
                icon: KeyboardArrowRightIcon,
                link: '/sapt/manager/slot_room'
              },
              {
                name: 'Productos',
                icon: KeyboardArrowRightIcon,
                link: '/sapt/manager/product'
              },
              {
                name: 'Inventario',
                icon: KeyboardArrowRightIcon,
                link: '/sapt/manager/inventory'
              },
        ]
      },
      {
        name: 'Servicio al cliente',
        icon: PeopleIcon,
        link: '',
        items: [
          {
            name: 'Pagos manuales',
            icon: KeyboardArrowRightIcon,
            link: '/sapt/manager/hand_pay'
          },
          {
            name: 'Pedidos del bar',
            icon: KeyboardArrowRightIcon,
            link: '/sapt/manager/bar_order'
          }
        ]
      },
      {
        name: 'Programa de recompensas',
        icon: ArticleIcon,
        link: ''
        ,
        items: [
          {
            name: 'Tipos de cliente',
            icon: KeyboardArrowRightIcon,
            link: '/sapt/manager/nclient_type'
          },
          {
            name: 'Parámetros',
            icon: KeyboardArrowRightIcon,
            link: '/sapt/manager/parameters'
          }
        ]
      },
      {
        name: 'Monitoreo y estadísticas',
        icon: ArticleIcon,
        link: '',
        items: [
          {
            name: 'Estadísticas de los clientes',
            icon: KeyboardArrowRightIcon,
            link: '/sapt/manager/statistics/client'
          }
        ]
      }
    ]
  }
];

export default menuItems;