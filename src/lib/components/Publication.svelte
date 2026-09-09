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
	<span class="cv-description">{publication.summary}</span><br />
	<i>{venue}</i>
	<br />
	<span class="pub-misc">
		<PublicationLinks {publication} />
		{#if showBibtex && publication.bibtex}
			<button
				type="button"
				class="cv-bibtex-icon"
				aria-expanded={expanded}
				aria-controls={`_${publication.id}_selected`}
				onclick={() => (expanded = !expanded)}
				><i class="fas fa-book" aria-hidden="true"></i> BibTeX</button
			>
		{/if}
		{#if publication.award}<span class="cv-award"
				><i class="fas fa-trophy" aria-hidden="true"></i> {publication.award}</span
			>{/if}
		{#if publication.equalContribution}<span style="color: #9a9a9a"
				>* Authors contributed equally</span
			>{/if}
	</span>
</p>
{#if showBibtex && publication.bibtex}
	<div class="highlighter-rouge bibtex" id={`_${publication.id}_selected`} hidden={!expanded}>
		<div class="highlight"><pre>{publication.bibtex.trim()}</pre></div>
	</div>
{/if}

<style>
	button {
		border: 0;
		padding: 0;
		background: none;
		font: inherit;
		cursor: pointer;
	}
</style>
