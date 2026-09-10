<script lang="ts">
	import Authors from '$lib/components/Authors.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Metadata from '$lib/components/Metadata.svelte';
	import Publication from '$lib/components/Publication.svelte';
	import { headingId } from '$lib/slug';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const publication = $derived(data.publication);
</script>

<Metadata title={publication.title} description={publication.summary} image={publication.image} />
<Header />
<main class="flex flex-col px-4 md:px-6">
	<article class="mx-auto w-full max-w-text">
		<h1 id={headingId(publication.title)}>{publication.title}</h1>
		<p>
			<Authors names={publication.authors} />
		</p>
		<figure class="my-4">
			<img src={publication.image} alt={`${publication.featureTitle} overview`} />
			<figcaption class="mt-2 text-center text-muted">{@html publication.caption}</figcaption>
		</figure>
		<h2 id="abstract">Abstract</h2>
		{#each publication.abstract.trim().split(/\n\s*\n/) as paragraph}<p>{paragraph}</p>{/each}
		<h2 id="citation">Citation</h2>
		<Publication {publication} />
	</article>
</main>
<Footer />
