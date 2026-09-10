<script lang="ts">
	import type { Publication } from '$lib/data/types';
	import Authors from './Authors.svelte';
	import PublicationLinks from './PublicationLinks.svelte';
	let { publication, showBibtex = false }: { publication: Publication; showBibtex?: boolean } =
		$props();
	let expanded = $state(false);
	const venue = $derived(
		`${publication.venue}${publication.venueShorthand ? ` (${publication.venueShorthand})` : ''}. ${publication.location ? `${publication.location}, ` : ''}${publication.year}.`
	);
</script>

<p>
	{#if publication.link}<a href={publication.link}><strong>{publication.title}</strong></a
		>{:else}<strong>{publication.title}</strong>{/if}
	<br />
	<Authors names={publication.authors} equalContribution={publication.equalContribution} />
	<br />
	<span class="text-sm font-light text-silver">{publication.summary}</span><br />
	<i>{venue}</i>
	<br />
	<span class="text-xs">
		<PublicationLinks {publication} />
		{#if showBibtex && publication.bibtex}
			<button
				type="button"
				class="mr-2 cursor-pointer whitespace-nowrap text-main-light hover:text-main"
				aria-expanded={expanded}
				aria-controls={`_${publication.id}_selected`}
				onclick={() => (expanded = !expanded)}
				><i class="fas fa-book" aria-hidden="true"></i> BibTeX</button
			>
		{/if}
		{#if publication.award}<span class="font-semibold text-gold"
				><i class="fas fa-trophy" aria-hidden="true"></i> {publication.award}</span
			>{/if}
		{#if publication.equalContribution}<span class="text-[#9a9a9a]"
				>* Authors contributed equally</span
			>{/if}
	</span>
</p>
{#if showBibtex && publication.bibtex}
	<pre
		id={`_${publication.id}_selected`}
		class="mb-4 overflow-x-auto px-4"
		hidden={!expanded}>{publication.bibtex.trim()}</pre>
{/if}
