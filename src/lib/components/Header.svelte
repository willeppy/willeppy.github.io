<script lang="ts">
	import { faHouse } from '@fortawesome/free-solid-svg-icons';
	import Icon from './Icon.svelte';
</script>

<header class="mb-8 bg-main text-white">
	<div class="mx-auto flex w-full max-w-page items-center justify-between px-4 py-3 md:px-6">
		<a class="font-medium text-white hover:text-white hover:no-underline" href="/"
			><Icon icon={faHouse} class="mr-2" />Will Epperson</a
		>
		<nav aria-label="Main" class="text-sm">
			<a class="text-white/80 hover:text-white hover:no-underline" href="/cv/">CV</a>
		</nav>
	</div>
</header>
