<script lang="ts">
	import { page } from '$app/state';

	let {
		title = 'Will Epperson',
		description = 'Will Epperson is a research engineer at Microsoft Research working on AI agents.',
		image = '/images/share.png'
	}: { title?: string; description?: string; image?: string } = $props();
</script>

<svelte:head>
	<title>{title === 'Will Epperson' ? title : `${title} — Will Epperson`}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={`https://willepperson.com${page.url.pathname}`} />
	<meta property="og:url" content={`https://willepperson.com${page.url.pathname}`} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={`https://willepperson.com${image}`} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@w_epperson" />
	<meta name="twitter:creator" content="@w_epperson" />
</svelte:head>
