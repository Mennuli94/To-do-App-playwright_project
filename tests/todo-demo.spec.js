
import { test, expect } from '@playwright/test';

test('test to-do @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('buy grocery');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('pay bills');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('walk ');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('add items');
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByText('buy grocery')).toBeVisible();
  await page.getByText('add items').click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('listitem').filter({ hasText: 'buy grocery' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'pay bills' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Completed' }).press('ArrowRight');
  await page.getByRole('link', { name: 'Completed' }).press('ArrowRight');
  await page.getByRole('link', { name: 'Completed' }).press('ArrowRight');
  await page.getByRole('link', { name: 'Completed' }).press('ArrowRight');
  await page.getByRole('button', { name: 'Clear completed' }).click();
});