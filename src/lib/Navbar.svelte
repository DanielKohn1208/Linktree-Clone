<script>
	import { invalidate } from "$app/navigation";
	import { navigating } from "$app/stores"
	let menu;
	export let data;
	$: if($navigating){
		menu.classList.remove('is-active')
	}
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item is-size-4 has-text-weight-bold" href="/">
			<p>Linktree-Clone</p>
		</a>

		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
			on:click={() => {
				menu.classList.toggle('is-active');
			}}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbarBasicExample" bind:this={menu} class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item" href="/"> Home </a>
			{#if data.user.isAuthenticated}
				<a class="navbar-item" href="/editor"> Your Link Tree </a>
			{/if}

			<div class="navbar-end">
				<div class="navbar-item">
					{#if data.user.isAuthenticated}
						<div class="buttons">
							<p class="is-size-4 has-text-weight-bold mr-3">
								Hi, {data.user.username}
							</p>
							<a href="/?signout=true" on:click={()=> {
								invalidate("data:auth")
							}}
								class="button is-danger" 
								data-sveltekit-preload-data="off">Log Out</a>
						</div>
					{:else}
						<div class="buttons">
							<a class="button is-primary" href="/register">
								<strong>Register</strong>
							</a>
							<a class="button is-light" href="/login"> Log in </a>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</nav>
