<script lang="ts">
	import { people } from '$lib/data/people';
	let { name, bold = false }: { name: string; bold?: boolean } = $props();
	const url = $derived(people[name]);
	const style = $derived(bold ? 'font-bold text-main' : 'text-body hover:text-main');
</script>

{#if url}<a class={style} href={url}>{name}</a>{:else}<span class={style}>{name}</span>{/if}
