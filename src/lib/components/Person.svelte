<script lang="ts">
	import { people } from '$lib/data/people';
	let { name }: { name: string } = $props();
	const url = $derived(people[name]);
</script>

{#if url}<a href={url}>{name}</a>{:else}{name}{/if}
