<script>
	import { enhance } from "$app/forms"
	export let form;
</script>
<section class="section is-flex is-justify-content-center">
	<div class="box mt-6" style="width: 500px">
		<h3 class="has-text-centered is-size-3 has-text-weight-bold">Register</h3>
		<form method="POST" action="?/register" use:enhance>
			<div class="field">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">Username</label>
				<div class="control">
					<input type="text" name="username" placeholder="Username" class="input" />
				</div>
			</div>

			<div class="field">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">Password</label>
				<div class="control">
					<input type="password" name="password" placeholder="Password" class="input" />
				</div>
			</div>
			<button class="button is-primary is-fullwidth">Register</button>
		</form>
		{#if form?.error}
			<p class="has-text-danger has-text-centered has-text-weight-bold mt-1">{form.error}</p>
		{/if}
	</div>
</section>
