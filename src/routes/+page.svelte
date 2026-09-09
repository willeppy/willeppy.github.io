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
<div class="h-[30px]"></div>
<div class="content">
	<main>
		<div id="intro-wrapper" class="l-middle">
			<div id="intro-title-wrapper" class="intro-left"><h1 id="intro-title">Will Epperson</h1></div>
			<div class="intro-left">
				<div class="intro-left">
					I am a research engineer on the AI Frontiers team at Microsoft Research working on AI
					agents.
				</div>
				<div class="h-4"></div>
				<div class="intro-left">
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
					and human-computer interaction, my research helps users more quickly explore their datasets,
					identify data quality issues, and streamline work with tabular data, text, and multi-agent AI
					workflows. My research has led to open-source tools adopted by the Python community and scientists,
					with publications and awards at venues such as IEEE VIS, EuroVis, and CHI. I've previously interned
					at Databricks, Microsoft Research, and Point72 Asset Management.
				</div>
				<div class="h-4"></div>
			</div>
			<div class="intro-right">
				<img id="intro-image" class="intro-right" src="/images/portrait.jpg" alt="Will Epperson" />
				<div class="h-2"></div>
				<div id="intro-image-links" class="intro-right">
					{#each socialLinks.filter((link) => link.onHomepage) as link}<SocialLink {link} />{/each}
				</div>
				<div class="h-2"></div>
				<div id="intro-cv-wrapper" class="intro-right">
					{#each socialLinks.filter((link) => link.id === 'cv-web') as link}<SocialLink
							{link}
						/>{/each}
				</div>
			</div>
		</div>
		<hr class="l-middle home-hr" />
		<h2 class="feature-title l-middle">
			Recent <a href="/cv/#publications">Research Publications</a>
		</h2>
		<div class="cover-wrapper l-screen">
			{#each featured as publication}<Feature {publication} />{/each}
		</div>
	</main>
</div>
<Footer />
