<script lang="ts">
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
</script>

<Metadata title="CV" />
<div class="h-[30px]"></div>
<div class="content">
	<main>
		<article id="cv" class="page">
			<h1>
				<a style="color: #313131; font-weight: 500; font-size: 1.25em" href="/">Will Epperson</a>
			</h1>
			<div class="cv-image-links-wrapper" style="font-size: 16px">
				{#each [1, 2] as group}
					<div class="cv-image-links">
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
					{#each talks.filter((talk) => talk.title === title) as talk}<span class="cv-left-date"
							>{talk.month} {talk.year}</span
						>{talk.location}<br />{/each}
				</p>
			{/each}
			<h2 id="honors-and-awards">Honors and Awards</h2>
			{#each awards as award}
				<p style="margin-bottom: 0.3rem">
					<span class="cv-left-date">{award.year}</span>{award.name}<br /><span
						class="cv-description">{award.description}</span
					>
				</p>
			{/each}
			<h2 id="mentees">Mentees</h2>
			<span class="cv-max-width"
				>During my PhD, I have had the pleasure of mentoring the following undergraduate and masters
				students on research projects.</span
			>
			{#each mentees as mentee}
				<p>
					<span class="cv-left-date">{mentee.year}</span><strong>{mentee.name}</strong><br /><span
						class="cv-description">{mentee.description}</span
					><br />
				</p>
			{/each}
			<h2 id="teaching">Teaching</h2>
			{#each teaching as entry}
				<p>
					<span class="cv-left-date">{entry.year}</span>
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
					<span class="cv-description">{entry.description}</span>
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
					<span class="cv-left-date">{activity.year}</span> <strong>{activity.title}</strong><br
					/><i>{activity.group}</i><br /><span class="cv-description">{activity.desc}</span>
				</p>
			{/each}
			<h2 id="skills">Skills</h2>
			<p style="margin-bottom: 0.3rem">
				{#each skillGroups as group}<strong>{group.title}: </strong>{skills
						.filter((skill) => skill.type === group.type)
						.map((skill) => skill.name)
						.join(' ')}<br />{/each}
			</p>
		</article>
	</main>
</div>
