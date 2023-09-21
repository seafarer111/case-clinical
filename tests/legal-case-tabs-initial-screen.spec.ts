import { test, expect } from '@playwright/test';
import { randomInt } from 'crypto';
import { delay } from 'lodash';

const SETTINGS = {
  IS_DEV: true,
  USERNAME:"admin@underwriting.dev",
  PASSWORD:"pch-dot-dev!",
  ENVIRONMENT_URL:"http://10.10.17.42:8081"
}

const PAGETITLE = "Legal Case";
const PAGENAME = "legal-cases"

test('legal-case-tabs-initial-screen', async ({ page }) => {

  const random = randomInt(100) * randomInt(100);
  await page.goto(`${SETTINGS.ENVIRONMENT_URL}/sign-in?redirectURL=%2Fqueues%2Flegal-cases`);
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill(SETTINGS.USERNAME || 'admin@underwriting.dev');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(SETTINGS.PASSWORD || 'pch-dot-dev!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForSelector('.ag-root-wrapper');

  const firstRow = await page.locator('.ag-body-viewport .ag-row');
  const navigationPromise = page.waitForNavigation();
  await firstRow.locator('.ag-cell').nth(1).click();
  await navigationPromise;

  await expect(page.locator('web-ui-grid').filter({ hasText: 'Case Pre Injury+ Add Drag here to set row groupsDrag here to set column labels L' }).getByRole('button', { name: '+ Add' })).toBeVisible();

});