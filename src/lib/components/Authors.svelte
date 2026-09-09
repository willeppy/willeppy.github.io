<script lang="ts">
	import Person from './Person.svelte';
	let { names, equalContribution = [] }: { names: string[]; equalContribution?: string[] } =
		$props();
</script>

{#each names as name, index}{#if index > 0}{', '}{/if}<Person
		{name}
	/>{#if equalContribution.includes(name)}*{/if}{/each}
