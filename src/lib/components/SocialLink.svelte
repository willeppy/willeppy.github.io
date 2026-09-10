<script lang="ts">
	import type { SocialLink } from '$lib/data/types';
	import Icon from './Icon.svelte';
	let { link }: { link: SocialLink } = $props();
</script>

<div class="flex">
	<div class="flex-[0_0_40px] text-center">
		<a href={link.url} aria-label={link.description} style:color={link.color}
			><Icon icon={link.icon} /></a
		>
	</div>
	<div class="flex-1">
		<a href={link.url}>{link.description}</a>
	</div>
</div>
