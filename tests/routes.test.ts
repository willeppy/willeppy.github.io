import assert from 'node:assert/strict';
import { existsSync, statSync } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { test } from 'node:test';
import { load } from 'cheerio';
import { publications } from '../src/lib/data/publications';
import { pageFile, pages } from './pages';

const isFile = (path: string) => existsSync(path) && statSync(path).isFile();

test('every page is prerendered with its content', async () => {
	for (const path of pages) {
		const html = await readFile(join('build', pageFile(path)), 'utf8');
		const page = load(html);
		assert.ok(page('main').text().trim().length > 100, path);
		assert.equal(page('link[rel="canonical"]').attr('href'), `https://willepperson.com${path}`);
	}
	for (const publication of publications) {
		const page = load(await readFile(join('build', pageFile(publication.url)), 'utf8'));
		assert.equal(page('article h1').text(), publication.title);
		assert.equal(page('#abstract').text(), 'Abstract');
		assert.equal(page('#citation').text(), 'Citation');
	}
});

test('endpoints and deploy files are present', async () => {
	for (const path of [
		'/404.html',
		'/feed.xml',
		'/sitemap.xml',
		'/robots.txt',
		'/CNAME',
		'/.nojekyll'
	]) {
		assert.ok((await stat(join('build', path))).isFile(), path);
	}
});

test('internal links, images, and fragment targets resolve in the static output', async () => {
	for (const path of [...pages, '/404.html']) {
		const page = load(await readFile(join('build', pageFile(path)), 'utf8'));
		for (const element of page('a[href], img[src]').toArray()) {
			const reference = page(element).attr('href') ?? page(element).attr('src');
			assert.ok(reference);
			const url = new URL(reference, `https://willepperson.com${path}`);
			if (url.origin !== 'https://willepperson.com') continue;
			const route = url.pathname === '/cv' ? '/cv/' : url.pathname;
			const file = isFile(join('build', route)) ? route : pageFile(route);
			assert.ok(isFile(join('build', file)), `${path} -> ${reference}`);
			if (url.hash) {
				const target = load(await readFile(join('build', file), 'utf8'));
				assert.ok(
					target('[id]')
						.toArray()
						.some(
							(element) => target(element).attr('id') === decodeURIComponent(url.hash.slice(1))
						),
					`${path} -> ${reference}`
				);
			}
		}
	}
});

test('CV section anchors and BibTeX targets are preserved', async () => {
	const cv = load(await readFile('build/cv/index.html', 'utf8'));
	const sections = [
		'education',
		'industry-experience',
		'research-experience',
		'publications',
		'talks',
		'honors-and-awards',
		'mentees',
		'teaching',
		'service',
		'leadership--activities',
		'skills'
	];
	assert.deepEqual(
		cv('h2[id]')
			.toArray()
			.map((element) => cv(element).attr('id')),
		sections
	);
	for (const publication of publications.filter((publication) => publication.bibtex)) {
		assert.equal(cv(`#_${publication.id}_selected`).length, 1);
	}
});

test('sitemap and feed contain every publication with production URLs', async () => {
	const sitemap = load(await readFile('build/sitemap.xml', 'utf8'), { xml: true });
	assert.deepEqual(
		sitemap('loc')
			.toArray()
			.map((element) => sitemap(element).text())
			.sort(),
		pages.map((path) => `https://willepperson.com${path}`).sort()
	);
	const feed = load(await readFile('build/feed.xml', 'utf8'), { xml: true });
	assert.equal(feed('entry').length, publications.length);
	for (const publication of publications) {
		assert.equal(feed(`entry link[href="https://willepperson.com${publication.url}"]`).length, 1);
	}
});
