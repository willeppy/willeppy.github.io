<script lang="ts">
	import { page } from '$app/state';
	const home = $derived(page.url.pathname === '/');
</script>

<header class="mb-8 bg-main text-white">
	<div class="mx-auto flex h-14 w-full max-w-page items-center px-2 md:px-4">
		{#if !home}
			<a
				class="flex items-center gap-3 rounded-md px-2 py-1 text-lg font-semibold text-white hover:bg-white/10 hover:text-white hover:no-underline"
				href="/"
			>
				<img class="h-8 w-8 rounded-full border-2 border-white/80" src="/images/logo.png" alt="" />
				Will Epperson
			</a>
		{/if}
	</div>
</header>
