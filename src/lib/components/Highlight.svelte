<script lang="ts">
	import type { Publication } from '$lib/data/types';
	let { publication }: { publication: Publication } = $props();
	const meta = $derived(
		publication.type === 'blog'
			? `${publication.venue} · ${publication.year}`
			: `${publication.type === 'thesis' ? 'Thesis' : 'Paper'} · ${publication.venueShorthand ?? publication.venue} ${publication.year}`
	);
</script>

<a
	class="group -mx-3 flex flex-col gap-3 rounded-md p-3 text-body hover:bg-[#f4f4f4] hover:text-body hover:no-underline sm:flex-row sm:gap-5"
	href={publication.url}
>
	<div
		class="h-36 w-full shrink-0 rounded border border-rule bg-cover bg-top-left transition-[background-position] duration-[1500ms] group-hover:bg-bottom-right sm:h-24 sm:w-40"
		style:background-image={`url(${publication.image})`}
		aria-hidden="true"
	></div>
	<div>
		<div class="text-[1.1rem] font-semibold text-title group-hover:text-main">
			{publication.featureTitle}
		</div>
		<div class="text-sm text-silver">{publication.summary}</div>
		<div class="mt-1 text-xs text-muted">{meta}</div>
	</div>
</a>
