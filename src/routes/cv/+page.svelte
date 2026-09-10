<script lang="ts">
	import CvDate from '$lib/components/CvDate.svelte';
	import Header from '$lib/components/Header.svelte';
	import Degree from '$lib/components/Degree.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Metadata from '$lib/components/Metadata.svelte';
	import Person from '$lib/components/Person.svelte';
	import Publication from '$lib/components/Publication.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import { activities } from '$lib/data/activities';
	import { awards } from '$lib/data/awards';
	import { education } from '$lib/data/education';
	import { experiences } from '$lib/data/experiences';
	import { mentees } from '$lib/data/mentees';
	import { publications } from '$lib/data/publications';
	import { reviewers } from '$lib/data/reviewers';
	import { skills } from '$lib/data/skills';
	import { socialLinks } from '$lib/data/socialLinks';
	import { talks } from '$lib/data/talks';
	import { teaching } from '$lib/data/teaching';

	const talkTitles = [...new Set(talks.map((talk) => talk.title))];
	const skillGroups = [
		{ type: 'lang', title: 'Programing Languages' },
		{ type: 'fwork', title: 'Toolkits, Frameworks, Software' },
		{ type: 'flang', title: 'Natural Languages' }
	] as const;
	const description = 'text-sm font-light text-silver';
</script>

<Metadata title="CV" />
<Header />
<main class="flex flex-col px-4 pb-12 md:px-6">
	<article
		id="cv"
		class="mx-auto mt-4 mb-12 w-full max-w-page [--link-color:var(--color-body)] [&_h2]:font-medium"
	>
		<h1>
			<a class="text-[1.25em] font-medium text-title hover:text-main" href="/">Will Epperson</a>
		</h1>
		<div class="text-[16px] md:flex">
			{#each [1, 2] as group}
				<div class="md:flex-1">
					{#each socialLinks.filter((link) => link.cvGroup === group) as link}<SocialLink
							{link}
						/>{/each}
				</div>
			{/each}
		</div>
		<hr />
		<h2 id="education">Education</h2>
		{#each education as degree}<Degree {degree} />{/each}
		<h2 id="industry-experience">Industry Experience</h2>
		{#each experiences.filter((experience) => experience.type === 'industry') as experience}<Experience
				{experience}
			/>{/each}
		<h2 id="research-experience">Research Experience</h2>
		{#each experiences.filter((experience) => experience.type === 'academic') as experience}<Experience
				{experience}
			/>{/each}
		<h2 id="publications">Publications</h2>
		{#each publications as publication}<Publication {publication} showBibtex />{/each}
		<h2 id="talks">Talks</h2>
		{#each talkTitles as title}
			<p>
				<strong>{title}</strong><br />
				{#each talks.filter((talk) => talk.title === title) as talk}<CvDate
						date={`${talk.month} ${talk.year}`}
					/>{talk.location}<br />{/each}
			</p>
		{/each}
		<h2 id="honors-and-awards">Honors and Awards</h2>
		{#each awards as award}
			<p class="mb-[0.3rem]">
				<CvDate date={award.year} />{award.name}<br /><span class={description}
					>{award.description}</span
				>
			</p>
		{/each}
		<h2 id="mentees">Mentees</h2>
		<span
			>During my PhD, I have had the pleasure of mentoring the following undergraduate and masters
			students on research projects.</span
		>
		{#each mentees as mentee}
			<p>
				<CvDate date={mentee.year} /><strong>{mentee.name}</strong><br /><span class={description}
					>{mentee.description}</span
				><br />
			</p>
		{/each}
		<h2 id="teaching">Teaching</h2>
		{#each teaching as entry}
			<p>
				<CvDate date={entry.year} />
				{#if entry.classUrl}<a href={entry.classUrl}><strong>{entry.position}</strong></a
					>{:else}<strong>{entry.position}</strong>{/if}<br />
				<i
					>{#if entry.institutionUrl}<a href={entry.institutionUrl}>{entry.institution}</a
						>{:else}{entry.institution}{/if}, {entry.location}</i
				><br />
				{#if entry.ta}
					{#if entry.classUrl}<a href={entry.classUrl}>{entry.class}</a>{:else}{entry.class}{/if},
					Instructor: <Person name={entry.instructor} /><br />
				{/if}
				<span class={description}>{entry.description}</span>
			</p>
		{/each}
		<h2 id="service">Service</h2>
		<p>
			Reviewer for {reviewers
				.map((reviewer) => `${reviewer.conference} ${reviewer.year}`)
				.join(', ')}.
		</p>
		<h2 id="leadership--activities">Leadership &amp; Activities</h2>
		{#each activities as activity}
			<p>
				<CvDate date={activity.year} /> <strong>{activity.title}</strong><br /><i
					>{activity.group}</i
				><br /><span class={description}>{activity.desc}</span>
			</p>
		{/each}
		<h2 id="skills">Skills</h2>
		<p class="mb-[0.3rem]">
			{#each skillGroups as group}<strong>{group.title}: </strong>{skills
					.filter((skill) => skill.type === group.type)
					.map((skill) => skill.name)
					.join(' ')}<br />{/each}
		</p>
	</article>
</main>
