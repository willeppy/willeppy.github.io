<script lang="ts">
	import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
	import {
		faCode,
		faLink,
		faNewspaper,
		faPlay,
		faVideo,
		faWindowMaximize
	} from '@fortawesome/free-solid-svg-icons';
	import type { Publication } from '$lib/data/types';
	import Icon from './Icon.svelte';
	let { publication }: { publication: Publication } = $props();
	const links = [
		{ key: 'url', label: 'Project', icon: faLink },
		{ key: 'demo', label: 'Demo', icon: faPlay },
		{ key: 'pdf', label: 'PDF', icon: faFilePdf },
		{ key: 'blog', label: 'Blog', icon: faNewspaper },
		{ key: 'recording', label: 'Recording', icon: faVideo },
		{ key: 'slides', label: 'Slides', icon: faWindowMaximize },
		{ key: 'code', label: 'Code', icon: faCode }
	] as const;
</script>

{#each links as link}
	{@const url = publication[link.key]}
	{#if url}<a
			class="mr-2 whitespace-nowrap text-main-light hover:text-main hover:no-underline"
			href={url}><Icon icon={link.icon} /> {link.label}</a
		>{/if}
{/each}
