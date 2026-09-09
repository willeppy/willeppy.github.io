<script lang="ts">
	import { page } from '$app/state';
	import NotFound from '$lib/components/NotFound.svelte';
</script>

{#if page.status === 404}
	<NotFound />
{:else}
	<main>
		<h1>{page.status}: {page.error?.message}</h1>
		<p><a href="/">Head back home</a></p>
	</main>
{/if}
