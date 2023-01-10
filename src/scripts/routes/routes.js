import HomepageRestaurant from '../views/pages/homepage';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorites';

const routes = {
  '/': HomepageRestaurant, // default page
  '/homepage': HomepageRestaurant,
  '/detail/:id': Detail,
  '/favorites': Favorite,
};

export default routes;
