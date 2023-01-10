import FavoriteRestaurants from '../../data/favorite-restaurants';
import { createRestaurantItemTemplate, createMessageNullResto } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <a href="#content__heading" class="skip-link favorites">Menuju ke konten</a>
      <div class="content">
        <h2 class="content__heading mainContentOfFavorites" id="favoritesResto" tabindex="0">Your Liked Restaurant</h2>
        <div id="message" class="message">
        </div>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurants.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const messageContainer = document.querySelector('#message');
    if (restaurants.length === 0) {
      messageContainer.innerHTML = createMessageNullResto();
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
