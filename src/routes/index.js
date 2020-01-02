import { Home, About } from '../views';

const routes = [
  {
    path: '/home',
    name: 'LandingPage',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: About
  }
];

export default routes;
