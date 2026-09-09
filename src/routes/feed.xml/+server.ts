import { publications } from '$lib/data/publications';
import { escapeXml } from '$lib/xml';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const sorted = [...publications].sort((a, b) => b.date.localeCompare(a.date));
	const entries = sorted
		.map(
			(publication) => `<entry>
    <title>${escapeXml(publication.title)}</title>
    <link href="https://willepperson.com${publication.url}" />
    <id>http://willepperson.com${publication.url}</id>
    <published>${publication.date}T00:00:00Z</published>
    <updated>${publication.date}T00:00:00Z</updated>
    <summary>${escapeXml(publication.abstract.trim())}</summary>
  </entry>`
		)
		.join('');
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
      <title>Will Epperson</title>
      <id>http://willepperson.com/feed.xml</id>
      <link href="https://willepperson.com/feed.xml" rel="self" />
      <link href="https://willepperson.com/" />
      <updated>${new Date().toISOString()}</updated>
      <author><name>Will Epperson</name><email>willepp@live.com</email></author>
      ${entries}
    </feed>`,
		{ headers: { 'Content-Type': 'application/atom+xml' } }
	);
};
