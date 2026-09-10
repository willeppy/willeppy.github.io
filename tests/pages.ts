import { publications } from '../src/lib/data/publications';

export const pages = ['/', '/cv/', ...publications.map((publication) => publication.url)];

export function pageFile(path: string): string {
	return path.endsWith('/') ? `${path}index.html` : path.endsWith('.html') ? path : `${path}.html`;
}
