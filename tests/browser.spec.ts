import { expect, test } from '@playwright/test';
import assert from 'node:assert/strict';
import { pages } from './pages';

for (const path of [...pages, '/404.html']) {
	test(`${path} loads directly and survives a refresh`, async ({ page }) => {
		const errors: string[] = [];
		page.on('pageerror', (error) => errors.push(error.message));
		const response = await page.goto(path);
		expect(response?.status()).toBe(200);
		await expect(page.locator('main')).toBeVisible();
		await page.reload();
		await expect(page.locator('main h1').first()).toBeVisible();
		await page.evaluate(() => document.fonts.ready);
		const content = await page.locator('main > :first-child').boundingBox();
		const viewport = page.viewportSize();
		assert(content && viewport);
		expect(Math.abs(content.x + content.width / 2 - viewport.width / 2)).toBeLessThan(1);
		expect(
			await page
				.locator('main img')
				.evaluateAll((images) =>
					images.every(
						(image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0
					)
				)
		).toBe(true);
		expect(
			await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
		).toBe(true);
		expect(errors).toEqual([]);
	});
}

test('homepage links navigate to projects and the CV publication anchor', async ({ page }) => {
	await page.goto('/');
	await page.locator('main a[href="/papers/agdebugger"]').first().click();
	await expect(page.locator('article h1')).toHaveText(
		'Interactive Debugging and Steering of Multi-Agent AI Systems'
	);
	await page.goBack();
	await page.getByRole('link', { name: 'Research Publications', exact: true }).click();
	await expect(page).toHaveURL(/\/cv\/#publications$/);
	await expect(page.locator('#publications')).toBeInViewport();
});

test('BibTeX toggles using the keyboard without expanding another citation', async ({ page }) => {
	await page.goto('/cv/');
	const buttons = page.getByRole('button', { name: 'BibTeX' });
	const first = buttons.nth(0);
	await first.focus();
	await page.keyboard.press('Enter');
	await expect(first).toHaveAttribute('aria-expanded', 'true');
	await expect(page.locator('pre:visible')).toHaveCount(1);
	await expect(buttons.nth(1)).toHaveAttribute('aria-expanded', 'false');
	await page.keyboard.press('Space');
	await expect(page.locator('pre:visible')).toHaveCount(0);
});

test('an unknown URL returns a useful 404', async ({ page }) => {
	const response = await page.goto('/papers/does-not-exist');
	expect(response?.status()).toBe(404);
	await expect(page.getByRole('link', { name: 'Head back home' })).toBeVisible();
});
