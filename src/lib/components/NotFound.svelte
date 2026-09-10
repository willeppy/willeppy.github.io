<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Metadata from './Metadata.svelte';
</script>

<Metadata title="404: Page not found" />
<Header />
<main class="flex flex-col px-4 md:px-6">
	<div class="mx-auto w-full max-w-text">
		<h1>404: Page not found</h1>
		<p class="text-[1.3rem] font-light text-[#333]">
			Sorry, we've misplaced that URL or it's pointing to something that doesn't exist. <a href="/"
				>Head back home</a
			> to try finding it again.
		</p>
	</div>
</main>
<Footer />
