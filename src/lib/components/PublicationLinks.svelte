<script lang="ts">
	import type { Publication } from '$lib/data/types';
	let { publication, featured = false }: { publication: Publication; featured?: boolean } =
		$props();
	const links = [
		{ key: 'url', label: 'Project', icon: 'fas fa-link' },
		{ key: 'demo', label: 'Demo', icon: 'fas fa-play' },
		{ key: 'pdf', label: 'PDF', icon: 'far fa-file-pdf' },
		{ key: 'blog', label: 'Blog', icon: 'fas fa-newspaper' },
		{ key: 'video', label: 'Video', icon: 'fas fa-film' },
		{ key: 'preview', label: 'Preview', icon: 'fas fa-eye' },
		{ key: 'talk', label: 'Talk', icon: 'fas fa-video' },
		{ key: 'recording', label: 'Recording', icon: 'fas fa-video' },
		{ key: 'slides', label: 'Slides', icon: 'fas fa-window-maximize' },
		{ key: 'poster', label: 'Poster', icon: 'fas fa-image' },
		{ key: 'code', label: 'Code', icon: 'fas fa-code' },
		{ key: 'data', label: 'Data', icon: 'fas fa-database' }
	] as const;
</script>

{#if publication.comingSoon}<span
		><i class="fas fa-arrow-right" aria-hidden="true"></i> Coming soon!</span
	>{/if}
{#each links as link}
	{@const url = publication[link.key]}
	{#if url}<a
			class="mr-2 whitespace-nowrap text-main-light hover:text-main hover:no-underline"
			href={url}
			><i class={featured && link.key === 'pdf' ? 'fas fa-file-pdf' : link.icon} aria-hidden="true"
			></i>
			{link.label}</a
		>{/if}
{/each}
