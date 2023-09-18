<script>
	export let data
	import { tree } from '$lib/store';
	import Linkform from '$lib/Linkform.svelte';
	import Instagramdisplay from '$lib/Instagramdisplay.svelte';
	import Settingsmodal from '$lib/Settingsmodal.svelte';
	tree.set(data.linktree)
	let isFormOpen = false;
	let modalOpen = false;
	const toggleForm = function () {
		isFormOpen = !isFormOpen;
	};
	const toggleModal = function () {
		modalOpen = !modalOpen;
	};

</script>

<button on:click={toggleModal}>Settings</button>
<Settingsmodal {toggleModal} {modalOpen} />
<section class="section is-flex is-justify-content-center">
	<div style="min-width: 200px; max-width: 800px; width: 100% ">
		{#each $tree as item}
			{#if item.type == 'title'}
				<h3 class="is-size-1 has-text-centered has-text-weight-bold is-underlined">{item.title}</h3>
			{:else if item.type == 'link'}
				<div class="box">
					<img src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url={item.link}&size=16" alt="">
					<a href={item.link}>{item.title}</a>
				</div>
			{:else if item.type == 'instagram'}
				<Instagramdisplay {item} />
			{/if}
		{/each}

		{#if isFormOpen}
			<button on:click={toggleForm} class="button is-outlined is-fullwidth is-large">+</button>
		{:else}
			<Linkform {toggleForm} />
		{/if}
	</div>
</section>

<style>
</style>
