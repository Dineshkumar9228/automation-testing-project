# Automation Testing Project

## Overview
This project demonstrates end-to-end automation testing using Playwright.

## Features
- UI Automation (Login, Add to Cart, Checkout)
- API Testing (User API validation)
- Page Object Model (POM) design pattern
- End-to-End workflow validation

## Tech Stack
- Playwright (JavaScript)
- Node.js

## Test Scenarios
1. User login with valid credentials
2. Add product to cart
3. Complete checkout process
4. Validate order success message
5. API response validation

## How to Run
npm install  
npx playwright test
npx playwright test --headed
npx playwright show-report
npm install -g allure-commandline    //for industry standard ui test reports