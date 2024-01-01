<script>
	export let data;
	import { tree } from '$lib/store';
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import Linkform from '$lib/Linkform.svelte';
	import Instagramdisplay from '$lib/Instagramdisplay.svelte';
	import Settingsmodal from '$lib/Settingsmodal.svelte';
	import Titledisplay from '$lib/Titledisplay.svelte';
	import Linkdisplay from '$lib/Linkdisplay.svelte';
	import YoutubeVideodisplay from '$lib/YoutubeVideodisplay.svelte';

	// constants
	const isEditing = true;

	//data manipulation
	tree.init(data.linktree);
	$: console.log($tree);

	function deleteItem(id) {
		console.log('BUTTON PUSHED!');
		tree.update((n) => {
			const newArray = [];
			n.forEach((t) => {
				if (t.id != id) {
					newArray.push(t);
				}
			});
			return newArray;
		});
		pushData();
	}

	//UI manipulation
	let isFormOpen = false;
	let modalOpen = false;
	const toggleForm = function () {
		isFormOpen = !isFormOpen;
	};
	const toggleModal = function () {
		modalOpen = !modalOpen;
	};

	// draggable stuff
	const flipDurationMs = 150;
	function handleDndConsider(e) {
		tree.set(e.detail.items);
	}

	async function handleDndFinalize(e) {
		tree.set(e.detail.items);
		pushData();
	}
	async function pushData() {
		fetch('/editor', {
			method: 'POST',
			body: JSON.stringify({
				tree: $tree
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	}
</script>

<Settingsmodal {toggleModal} {modalOpen} {data} />
<section class="section is-flex is-justify-content-center">
	<div style="min-width: 200px; max-width: 800px; width: 100% ">
		<section
			use:dndzone={{ items: $tree, flipDurationMs }}
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
		>
			{#each $tree as item (item.id)}
				<div animate:flip={{ duration: flipDurationMs }}>
					{#if item.type == 'title'}
						<Titledisplay {item} {deleteItem} {isEditing} />
					{:else if item.type == 'link'}
						<Linkdisplay {item} {deleteItem} {isEditing} />
					{:else if item.type == 'instagram'}
						<Instagramdisplay {item} {deleteItem} {isEditing} />
					{:else if item.type == 'youtube-video'}
						<YoutubeVideodisplay {item} {deleteItem} {isEditing} />
					{/if}
				</div>
			{/each}
		</section>

		{#if isFormOpen}
			<Linkform {toggleForm} />
		{:else}
			<button on:click={toggleForm} class="button is-outlined is-fullwidth is-large mt-3">+</button>
		{/if}

		<button class="button mt-5" on:click={toggleModal}>Open Deployement Settings</button>
	</div>
</section>
<style>
</style>
