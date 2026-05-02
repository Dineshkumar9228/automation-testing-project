import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { user, checkoutData } from '../utils/testData';

test('E2E Flow using POM', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.navigate();
  await login.login(user.username, user.password);

  await expect(page).toHaveURL(/inventory/);

  await inventory.addProduct();
  await inventory.goToCart();

  await checkout.checkout(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.zip
  );

  const message = await checkout.getSuccessMessage();
  expect(message).toContain('Thank you for your order!');
});