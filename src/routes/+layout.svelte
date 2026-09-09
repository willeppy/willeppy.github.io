<script lang="ts">
	import type { Snippet } from 'svelte';
	import '$lib/styles/tailwind.css';
	import '$lib/styles/site.scss';

	let { children }: { children: Snippet } = $props();
</script>

{@render children()}
