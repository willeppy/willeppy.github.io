<script lang="ts">
	import type { Publication } from '$lib/data/types';
	import PublicationLinks from './PublicationLinks.svelte';
	let { publication }: { publication: Publication } = $props();
</script>

<div
	class="my-4 flex w-full flex-col justify-between border border-rule hover:border-[#333] md:my-2 md:mr-4 md:h-[450px] md:w-[255px] wide:mx-2"
>
	<div class="w-full border-b border-rule">
		<a href={publication.url}><img src={publication.image} alt={publication.featureTitle} /></a>
	</div>
	<div class="flex grow flex-col justify-between p-4">
		<div>
			<div class="text-[1.4rem] leading-[1.3] font-semibold text-title capitalize">
				<a class="text-title hover:no-underline" href={publication.url}
					>{publication.featureTitle}</a
				>
			</div>
			<div class="text-sm text-muted">{publication.summary}</div>
			<div class="pt-2 text-xs italic">{publication.venueShorthand ?? ''} {publication.year}</div>
			{#if publication.award}<span class="text-xs font-semibold text-gold"
					><i class="fas fa-trophy" aria-hidden="true"></i> {publication.award}</span
				>{/if}
		</div>
		<div class="pt-2 text-xs"><PublicationLinks {publication} featured /></div>
	</div>
</div>
