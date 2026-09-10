<script lang="ts">
	import Feature from '$lib/components/Feature.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Metadata from '$lib/components/Metadata.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import { publications } from '$lib/data/publications';
	import { socialLinks } from '$lib/data/socialLinks';

	const featured = publications
		.filter((publication) => publication.featured)
		.sort((a, b) => a.featureOrder - b.featureOrder);
</script>

<Metadata />
<main class="flex flex-col px-4 pt-[30px] md:px-6">
	<div
		id="intro-wrapper"
		class="mx-auto mt-12 grid w-full max-w-page grid-cols-8 gap-x-8 gap-y-4 wide:max-w-middle"
	>
		<h1 class="col-span-8 mt-0 mb-6 text-[3.75rem] font-semibold text-[#111]">Will Epperson</h1>
		<div class="col-span-8 space-y-4 pb-4 text-[1.2em] md:col-span-5">
			<div>
				I am a research engineer on the AI Frontiers team at Microsoft Research working on AI
				agents.
			</div>
			<div>
				I did my PhD in Human Computer Interaction at Carnegie Mellon University in the <a
					href="https://dig.cmu.edu"
				>
					DIG
				</a>
				research group advised by <a href="https://www.domoritz.de">Dominik Moritz</a> and
				<a href="https://perer.org">Adam Perer</a>. My PhD focused on
				<a href="/thesis.pdf">Interactive Data Profiling</a> where I developed interactive systems to
				help AI developers and data scientists better understand their data, with the goal of enabling
				more usable AI systems and trustworthy decision-making. Drawing on techniques from data visualization
				and human-computer interaction, my research helps users more quickly explore their datasets, identify
				data quality issues, and streamline work with tabular data, text, and multi-agent AI workflows.
				My research has led to open-source tools adopted by the Python community and scientists, with
				publications and awards at venues such as IEEE VIS, EuroVis, and CHI. I've previously interned
				at Databricks, Microsoft Research, and Point72 Asset Management.
			</div>
		</div>
		<div class="col-span-8 md:col-span-3">
			<img src="/images/portrait.jpg" alt="Will Epperson" />
			<div class="h-2"></div>
			<div class="flex flex-col justify-center border-l-2 border-[#ccc] bg-[#f4f4f4] p-4">
				{#each socialLinks.filter((link) => link.onHomepage) as link}<SocialLink {link} />{/each}
			</div>
			<div class="h-2"></div>
			<div class="border-l-2 border-main bg-main-light-bg p-4">
				{#each socialLinks.filter((link) => link.id === 'cv-web') as link}<SocialLink
						{link}
					/>{/each}
			</div>
		</div>
	</div>
	<hr class="mx-auto w-full max-w-page wide:max-w-middle" />
	<h2 class="mx-auto mt-8 mb-2 w-full max-w-page font-normal wide:max-w-middle">
		Recent <a class="font-semibold" href="/cv/#publications">Research Publications</a>
	</h2>
	<div class="mx-auto flex w-full max-w-page flex-wrap wide:max-w-none wide:justify-center">
		{#each featured as publication}<Feature {publication} />{/each}
	</div>
</main>
<Footer />
