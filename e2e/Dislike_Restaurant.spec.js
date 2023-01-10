const assert = require('assert');

Feature('Dislike Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('Dislike one restaurant', async ({ I }) => {
  I.see('Belum ada restoran favorite yang ditambahkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.see('Belum ada restoran favorite yang ditambahkan', '.restaurant-item__not__found');
});
