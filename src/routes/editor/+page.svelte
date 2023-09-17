<script>
	import { tree } from '$lib/store';
	import Linkform from '$lib/Linkform.svelte';
	import Instagramdisplay from '$lib/Instagramdisplay.svelte';
	import Settingsmodal from '$lib/Settingsmodal.svelte';
	let isFormOpen = false;
	let modalOpen = false;
	const toggleForm = function () {
		isFormOpen = !isFormOpen;
	};
	const toggleModal = function() {
		modalOpen = !modalOpen
	}
</script>
<button on:click={toggleModal}>Settings</button>
<Settingsmodal {toggleModal} {modalOpen}/>
<section class="section is-flex is-justify-content-center">
	<div style="min-width: 200px; max-width: 800px; width: 100% ">
		{#each $tree as item}
			<div>
				{#if (item.type == 'title')}
					<h3 class="is-size-3 has-text-centered has-text-weight-bold">{item.title}</h3>
				{:else if item.type == 'link'}
					<a href="{item.link}">{item.title}</a>
				{:else if item.type == 'instagram'}
					<Instagramdisplay {item}/>
				{/if}

			</div>
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
