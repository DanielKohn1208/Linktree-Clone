<script>
	export let modalOpen;
	export let toggleModal;
	export let data;
	console.log('Here is the data');
	import { enhance } from '$app/forms';
</script>

<div class="modal" class:is-active={modalOpen}>
	<div class="modal-background" />
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">Modal title</p>
			<button class="delete" on:click={toggleModal} aria-label="close" />
		</header>
		<section class="modal-card-body">
			<p class="is-bold">Deployement Settings</p>
			<form
				method="POST"
				action={data.isDeployed ? '?/setDeployFalse' : '?/setDeployTrue'}
				use:enhance
			>
				<button
					class="button"
					class:is-primary={!data.isDeployed}
					class:is-danger={data.isDeployed}
				>
					{#if data.isDeployed}
						Make private
					{:else}
						Make public 
					{/if}</button
				>
			</form>
			{#if data.isDeployed}
				<a href="/view/{data.user.username}"> Copy to share your link</a>
			{/if}
		</section>
	</div>
</div>
