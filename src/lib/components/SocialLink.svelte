<script lang="ts">
	import type { SocialLink } from '$lib/data/types';
	let { link }: { link: SocialLink } = $props();
</script>

<div class="flex">
	<div class="flex-[0_0_40px] text-center">
		<a href={link.url} aria-label={link.description}
			><i class={link.class} aria-hidden="true" style:color={link.color}></i></a
		>
	</div>
	<div class="flex-1">
		<a class="intro-image-links-color" href={link.url}>{link.description}</a>
	</div>
</div>
