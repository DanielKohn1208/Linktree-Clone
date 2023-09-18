<script>
	import { tree } from '$lib/store';
	import Titleform from '$lib/Titleform.svelte';
	import Link from '$lib/Link.svelte';
	import Instagramform from './Instagramform.svelte';
	export let toggleForm;
	let type;
	function addData(data) {
		toggleForm();
		tree.update((n) => [...n, data]);
		console.log('sending fetch request')
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

<form>
	<div class="box">
		<div class="is-flex mb-3">
			<button class="button is-danger mr-3" on:click={toggleForm}>X</button>
			<div class="select">
				<select bind:value={type} name="type" id="">
					<option value="title">Title</option>
					<option value="link">Link</option>
					<option value="instagram">Instagram</option>
					<option value="other">OTHER</option>
				</select>
			</div>
			<div />
		</div>
		{#if type == 'title'}
			<Titleform {addData} />
		{:else if type == 'link'}
			<Link {addData} />
		{:else if type == 'instagram'}
			<Instagramform {addData} />
		{:else}
			<p>THis is not</p>
		{/if}
	</div>
</form>
