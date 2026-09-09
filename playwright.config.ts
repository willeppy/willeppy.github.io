import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	testMatch: '**/*.spec.ts',
	fullyParallel: true,
	workers: 2,
	use: {
		baseURL: 'http://127.0.0.1:4173',
		channel: process.env.PLAYWRIGHT_CHANNEL,
		screenshot: 'only-on-failure'
	},
	projects: [
		{ name: 'desktop', use: { viewport: { width: 1440, height: 1000 } } },
		{ name: 'mobile', use: { viewport: { width: 390, height: 844 } } }
	],
	webServer: {
		command: 'npm run preview -- --host 127.0.0.1',
		url: 'http://127.0.0.1:4173',
		reuseExistingServer: !process.env.CI
	}
});
