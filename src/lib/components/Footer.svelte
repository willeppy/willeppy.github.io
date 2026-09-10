<script lang="ts">
	import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
	import Icon from './Icon.svelte';

	const links = [
		{ url: 'mailto:willepp@live.com', label: 'Email', icon: faEnvelope },
		{ url: 'https://twitter.com/w_epperson', label: 'Twitter', icon: faTwitter },
		{ url: 'https://www.linkedin.com/in/willepperson/', label: 'LinkedIn', icon: faLinkedinIn },
		{ url: 'https://github.com/willeppy', label: 'GitHub', icon: faGithub },
		{
			url: 'https://scholar.google.com/citations?user=jgBHxR4AAAAJ&hl=en',
			label: 'Google Scholar',
			icon: faGraduationCap
		}
	];
	const year = new Date().getFullYear();
</script>

<footer class="mt-8 bg-main px-4 py-12 text-footer-text md:px-6">
	<div class="mx-auto w-full max-w-text">
		{#each links as link}
			<a class="mr-3 text-[1.333em] text-footer-text" href={link.url} aria-label={link.label}
				><Icon icon={link.icon} /></a
			>
		{/each}
		<br /><br />
		&copy; <time class="text-footer-text" datetime={String(year)}>{year}</time> Will Epperson.
	</div>
</footer>
