# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CreateLead.spec.ts >> Login page using POM
- Location: CreateLead.spec.ts:9:5

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | 
  2  | /* Actions performed for a login page :
  3  | 1. Loading url
  4  | 2. Enter Credentials
  5  | 3. Click Login button */
  6  | 
  7  | import { Page } from "@playwright/test";
  8  | import {locators } from "../pages/locators";
  9  | 
  10 | export class LoginPage {
  11 | 
  12 |     // selectors = {
  13 |     //     "usernameField": "#username",
  14 |     //     "pwdField": "#password",
  15 |     //     "loginSubmit":".decorativeSubmit"
  16 |     // }
  17 | 
  18 |     page: Page // GLobal variable //property
  19 | 
  20 |     constructor(Lpage: Page) { //p1234123233141 -> blank page// Lpage is the page reference got through constructor parametrization
  21 |         this.page = Lpage
  22 |     }
  23 | 
  24 |     async loadurl(url: string) { // first actionability
> 25 |         await this.page.goto(url)
     |                         ^ Error: page.goto: url: expected string, got undefined
  26 |     }
  27 | 
  28 | 
  29 |     async enterCredentials(username: string, password: string) { // second actionability
  30 |         await this.page.locator(locators.usernameField).fill(username)
  31 |         await this.page.locator(locators.pwdField).fill(password)
  32 |     }
  33 | 
  34 |     async clickLogin() { // third actionability
  35 |         await this.page.locator(locators.loginSubmit).click();
  36 |         await this.page.waitForTimeout(3000) // demo purpsoe
  37 |     }
  38 | 
  39 | 
  40 | 
  41 | }
  42 | 
  43 | 
  44 | 
```