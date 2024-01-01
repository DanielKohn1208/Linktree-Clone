<script>
	import Instagramdisplay from '$lib/Instagramdisplay.svelte';
	import Linkdisplay from '$lib/Linkdisplay.svelte';
	import Titledisplay from '$lib/Titledisplay.svelte';
	import YoutubeVideodisplay from '$lib/YoutubeVideodisplay.svelte';
	const isEditing = false;
	export let data;
</script>

<section class="section is-flex is-justify-content-center">
	<div class="" style="min-width: 200px; max-width: 800px; width: 100%">
		{#each data.linktree as item}
			<div>
				{#if item.type == 'title'}
					<Titledisplay {item} {isEditing} />
				{:else if item.type == 'link'}
					<Linkdisplay {item} {isEditing} />
				{:else if item.type == 'instagram'}
					<Instagramdisplay {item} {isEditing} />
				{:else if item.type == 'youtube-video'}
					<YoutubeVideodisplay {item} {isEditing} />
				{/if}
			</div>
		{/each}
	</div>
</section>
<p>Want your own linktree? Make your own here</p>
