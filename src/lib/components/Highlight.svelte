<script lang="ts">
	import { faFileLines, faGraduationCap, faNewspaper } from '@fortawesome/free-solid-svg-icons';
	import type { Publication } from '$lib/data/types';
	import Icon from './Icon.svelte';
	let { publication }: { publication: Publication } = $props();
	const icon = $derived(
		publication.type === 'thesis'
			? faGraduationCap
			: publication.type === 'blog'
				? faNewspaper
				: faFileLines
	);
	const meta = $derived(
		publication.type === 'blog'
			? `${publication.venue} · ${publication.year}`
			: `${publication.type === 'thesis' ? 'Thesis' : 'Paper'} · ${publication.venueShorthand ?? publication.venue} ${publication.year}`
	);
</script>

<li class="flex gap-4 py-4">
	<div
		class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-main-light-bg text-lg text-main"
	>
		<Icon {icon} />
	</div>
	<div>
		<a class="text-[1.1rem] font-semibold text-title hover:text-main" href={publication.url}
			>{publication.featureTitle}</a
		>
		<div class="text-sm text-silver">{publication.summary}</div>
		<div class="mt-1 text-xs text-muted">{meta}</div>
	</div>
</li>
