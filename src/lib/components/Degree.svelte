<script lang="ts">
	import type { Degree } from '$lib/data/types';
	import CvDate from './CvDate.svelte';
	import Person from './Person.svelte';
	let { degree }: { degree: Degree } = $props();
</script>

<p>
	<CvDate date={degree.years} /><strong>{degree.degree}</strong><br />
	{#if degree.institutionUrl}<a href={degree.institutionUrl}>{degree.institution}</a
		>{:else}{degree.institution}{/if}<br />
	{#if degree.advisor}<em>Advisors:</em>{' '}<Person
			name={degree.advisor}
		/>{/if}{#if degree.coAdvisor}{', '}<Person name={degree.coAdvisor} /><br />{/if}
	{#if degree.description}{degree.description.join(' ')}
	{/if}
	{#if degree.coursework}<em>Sample Coursework:</em>{' '}{degree.coursework.join(', ')}{/if}
</p>
