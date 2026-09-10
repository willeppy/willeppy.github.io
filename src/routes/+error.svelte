<script lang="ts">
	import { page } from '$app/state';
	import NotFound from '$lib/components/NotFound.svelte';
</script>

{#if page.status === 404}
	<NotFound />
{:else}
	<main class="flex flex-col px-4 md:px-6">
		<div class="mx-auto w-full max-w-text">
			<h1>{page.status}: {page.error?.message}</h1>
			<p><a href="/">Head back home</a></p>
		</div>
	</main>
{/if}
