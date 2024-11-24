import Login from '../components/Auth/login';
import Dashboard from '../components/Dashboard/dashboard';


const routes = [
  {
    path: '/',
    type: 'public',
    element: <Login />,
  },
//   {
//     path: '/about',
//     type: 'public',
//     element: <About />,
//   },
//   {
//     path: '/contact',
//     type: 'public',
//     element: <Contact />,
//   },
  {
    path: '/dashboard',
    type: 'protected',
    element: <Dashboard />,
  },
//   {
//     path: '/profile',
//     type: 'protected',
//     element: <Profile />,
//   },
];

export default routes;
