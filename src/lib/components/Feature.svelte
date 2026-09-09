<script lang="ts">
	import type { Publication } from '$lib/data/types';
	import PublicationLinks from './PublicationLinks.svelte';
	let { publication }: { publication: Publication } = $props();
</script>

<div class="cover">
	<div class="cover-image">
		<a href={publication.url}><img src={publication.image} alt={publication.featureTitle} /></a>
	</div>
	<div class="cover-inner">
		<div class="cover-top">
			<div class="cover-title"><a href={publication.url}>{publication.featureTitle}</a></div>
			<div class="cover-subtitle">{publication.summary}</div>
			<div class="cover-venue">{publication.venueShorthand ?? ''} {publication.year}</div>
			{#if publication.award}<span class="cv-award cover-award"
					><i class="fas fa-trophy" aria-hidden="true"></i> {publication.award}</span
				>{/if}
		</div>
		<div class="cover-footer-wrapper">
			<div class="cover-links">
				<span class="pub-misc"><PublicationLinks {publication} featured /></span>
			</div>
		</div>
	</div>
</div>
