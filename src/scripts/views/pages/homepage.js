import RestaurantsDbSource from '../../data/restaurantsdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomepageRestaurant = {
  async render() {
    return `
      <div class="hero-image">
        <picture>
          <source media="(max-width: 600px)" srcset="../hero-image/hero-image_2-small.jpg">
          <img src='../hero-image/hero-image_2.jpg' alt="hero-restaurant-image">
        </picture>
      </div>
      <div class="content">
        <h2 class="content__heading" id="content__heading">Find the Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsDbSource.restaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomepageRestaurant;
