<script lang="ts">
	import Person from './Person.svelte';
	let { names, boldSelf = false }: { names: string[]; boldSelf?: boolean } = $props();
</script>

{#each names as name, index}{#if index > 0}{', '}{/if}<Person
		{name}
		bold={boldSelf && name === 'Will Epperson'}
	/>{/each}
