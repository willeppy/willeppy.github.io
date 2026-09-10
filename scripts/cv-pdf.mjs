import { chromium } from '@playwright/test';

const local = process.env.SITE_URL ?? 'http://127.0.0.1:5173';
const production = 'https://willepperson.com';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.route(`${production}/**`, async (route) => {
	const response = await page.request.fetch(route.request().url().replace(production, local));
	await route.fulfill({ response });
});
await page.goto(`${production}/cv/`, { waitUntil: 'networkidle' });
await page.pdf({ path: 'static/cv.pdf', format: 'Letter', printBackground: true });
await browser.close();
console.log('wrote static/cv.pdf');
