import { publications } from '$lib/data/publications';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const paths = ['/', '/cv/', ...publications.map((publication) => publication.url)];
	const urls = paths
		.map((path) => `<url><loc>https://willepperson.com${path}</loc></url>`)
		.join('');
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
};
