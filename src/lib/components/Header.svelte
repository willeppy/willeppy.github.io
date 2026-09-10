<script lang="ts">
	import { faHouse } from '@fortawesome/free-solid-svg-icons';
	import Icon from './Icon.svelte';
	const links = [{ href: '/cv/', label: 'CV' }];
</script>

<header class="mb-8 bg-main text-white">
	<div class="mx-auto flex w-full max-w-page items-center justify-between px-2 py-2 md:px-4">
		<a
			class="rounded-md px-2 py-1.5 text-lg font-semibold text-white hover:bg-white/10 hover:text-white hover:no-underline"
			href="/"><Icon icon={faHouse} class="mr-2" />Will Epperson</a
		>
		<nav aria-label="Main">
			{#each links as link}
				<a
					class="rounded-md px-3 py-1.5 font-medium text-white hover:bg-white/10 hover:text-white hover:no-underline"
					href={link.href}>{link.label}</a
				>
			{/each}
		</nav>
	</div>
</header>
