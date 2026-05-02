export class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async checkout(first, last, zip) {
    await this.page.click('#checkout');
    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', zip);
    await this.page.click('#continue');
    await this.page.click('#finish');
  }

  async getSuccessMessage() {
    return await this.page.textContent('.complete-header');
  }
}