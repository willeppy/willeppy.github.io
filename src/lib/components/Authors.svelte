<script lang="ts">
	import Person from './Person.svelte';
	let { names }: { names: string[] } = $props();
</script>

{#each names as name, index}{#if index > 0}{', '}{/if}<Person {name} />{/each}
