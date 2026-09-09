import { error } from '@sveltejs/kit';
import { publications } from '$lib/data/publications';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () =>
	publications.map((publication) => ({ slug: publication.id }));

export const load: PageLoad = ({ params }) => {
	const publication = publications.find((publication) => publication.id === params.slug);
	if (!publication) error(404, 'Publication not found');
	return { publication };
};
