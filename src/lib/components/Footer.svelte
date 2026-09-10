<script lang="ts">
	const links = [
		{ url: 'mailto:willepp@live.com', label: 'Email', icon: 'fa fa-envelope' },
		{ url: 'https://twitter.com/w_epperson', label: 'Twitter', icon: 'fab fa-twitter' },
		{
			url: 'https://www.linkedin.com/in/willepperson/',
			label: 'LinkedIn',
			icon: 'fab fa-linkedin-in'
		},
		{ url: 'https://github.com/willeppy', label: 'GitHub', icon: 'fab fa-github' },
		{
			url: 'https://scholar.google.com/citations?user=jgBHxR4AAAAJ&hl=en',
			label: 'Google Scholar',
			icon: 'fa fa-graduation-cap'
		}
	];
	const year = new Date().getFullYear();
</script>

<footer class="mt-8 bg-main px-4 py-12 text-footer-text md:px-6">
	<div class="mx-auto w-full max-w-text">
		{#each links as link}
			<a href={link.url} aria-label={link.label}
				><i class={`fa-lg ${link.icon} mr-3 text-footer-text`} aria-hidden="true"></i></a
			>
		{/each}
		<br /><br />
		&copy; <time class="text-footer-text" datetime={String(year)}>{year}</time> Will Epperson.
	</div>
</footer>
