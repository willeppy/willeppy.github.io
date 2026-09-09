<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Metadata from './Metadata.svelte';
</script>

<Metadata title="404: Page not found" />
<Header />
<div class="content">
	<main>
		<div class="page">
			<h1 class="page-title">404: Page not found</h1>
			<p class="lead">
				Sorry, we've misplaced that URL or it's pointing to something that doesn't exist. <a
					href="/">Head back home</a
				> to try finding it again.
			</p>
		</div>
	</main>
</div>
<Footer />
