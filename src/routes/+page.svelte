<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Metadata from '$lib/components/Metadata.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import { publications } from '$lib/data/publications';
	import { socialLinks } from '$lib/data/socialLinks';

	const highlights = publications
		.filter((publication) => publication.featured)
		.sort((a, b) => b.date.localeCompare(a.date));
</script>

<Metadata />
<Header />
<main class="flex flex-col px-4 pb-12 md:px-6">
	<div id="intro-wrapper" class="mx-auto mt-12 grid w-full max-w-page grid-cols-12 gap-x-8 gap-y-4">
		<h1 class="col-span-12 mt-0 mb-6 text-[3.75rem] font-semibold text-[#111]">Will Epperson</h1>
		<div class="col-span-12 space-y-4 text-[1.2em] md:col-span-8">
			<div>
				I am a research engineer on the AI Frontiers team at Microsoft Research working on AI
				agents.
			</div>
			<div>
				My recent work is on agents that act on a user's behalf and work with other agents. I work
				on agent design, multi-agent environments, and the evaluations that measure how well they
				serve the people they represent.
			</div>
			<div>
				I did my PhD in Human Computer Interaction at Carnegie Mellon University. My thesis was on
				<a href="/papers/thesis">Interactive Data Profiling</a> systems that automatically help data scientists
				and AI developers better understand their data. My research has led to open-source tools adopted
				by the Python community and scientists, with publications and awards at venues such as IEEE VIS,
				EuroVis, and CHI. I've previously interned at Databricks, Microsoft Research, and Point72 Asset
				Management.
			</div>
		</div>
		<div class="col-span-12 md:col-span-4">
			<img
				class="aspect-[4/3] rounded border border-rule object-cover"
				src="/images/portrait.jpg"
				alt="Will Epperson"
			/>
			<div class="h-2"></div>
			<div class="flex flex-col justify-center rounded border-l-2 border-[#ccc] bg-[#f4f4f4] p-3">
				{#each socialLinks.filter((link) => link.onHomepage) as link}<SocialLink {link} />{/each}
			</div>
			<div class="h-2"></div>
			<div class="rounded border-l-2 border-main bg-main-light-bg p-3">
				{#each socialLinks.filter((link) => link.id === 'cv-web') as link}<SocialLink
						{link}
					/>{/each}
			</div>
		</div>
	</div>
	<hr class="mx-auto w-full max-w-page" />
	<section class="mx-auto w-full max-w-page">
		<h2 class="mt-8 mb-4 font-medium">Recent Work</h2>
		<div class="flex flex-col gap-1">
			{#each highlights as publication}<Highlight {publication} />{/each}
		</div>
		<a class="mt-4 inline-block" href="/cv/#publications">See all publications</a>
	</section>
</main>
