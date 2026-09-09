<script lang="ts">
	import type { Experience } from '$lib/data/types';
	import Authors from './Authors.svelte';
	let { experience }: { experience: Experience } = $props();
</script>

<p>
	<span class="cv-left-date">{experience.year}</span><a href={experience.institutionUrl}
		><strong>{experience.institution}</strong></a
	>, {experience.location}
	<br />
	<i
		>{experience.position}{#if experience.group}, <a href={experience.groupUrl}
				>{experience.group}</a
			>{/if}</i
	>
	<br />
	{#if experience.mentors}
		{experience.type === 'academic' ? 'Advisor' : 'Mentor'}: <Authors
			names={experience.mentors}
		/><br />
	{/if}
	<span class="cv-description">{experience.description}</span>
</p>
