<script lang="ts">
	import { people } from '$lib/data/people';
	let { name, bold = false }: { name: string; bold?: boolean } = $props();
	const url = $derived(people[name]);
</script>

{#if url}<a class={bold ? 'font-bold text-main' : ''} href={url}>{name}</a>{:else}<span
		class={bold ? 'font-bold text-main' : ''}>{name}</span
	>{/if}
