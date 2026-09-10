<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
	let { icon, class: className = '' }: { icon: IconDefinition; class?: string } = $props();
	const [width, height, , , path] = $derived(icon.icon);
</script>

<svg
	class={`inline-block h-[1em] fill-current align-[-0.125em] ${className}`}
	viewBox={`0 0 ${width} ${height}`}
	aria-hidden="true"><path d={Array.isArray(path) ? path.join(' ') : path} /></svg
>
