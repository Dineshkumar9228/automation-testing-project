export class InventoryPage {
  constructor(page) {
    this.page = page;
  }

  async addProduct() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}