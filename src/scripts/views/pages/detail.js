import UrlParser from '../../routes/url-parser';
import RestaurantsDbSource from '../../data/restaurantsdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <a href="#content__heading" class="skip-link detail">Menuju ke konten</a>
      <div id="restaurant" class="restaurant mainContentOfDetail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsDbSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const foods = await RestaurantsDbSource.foodList();
    const beverages = await RestaurantsDbSource.beverageList();
    const reviews = await RestaurantsDbSource.customerReviews();
    // eslint-disable-next-line max-len
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant, foods, beverages, reviews);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        rating: restaurant.restaurant.rating,
      },
    });
  },
};

export default Detail;
