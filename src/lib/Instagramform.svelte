<script>
	export let addData;
	const dataDefault = {
		type: 'instagram',
		username: '',
	};

	let dataElement = dataDefault;
	function submit() {
		addData(dataElement);
	}
</script>
<div class="field">
	<label for="" class="label">Username</label>
	<div class="control">
		<input
			bind:value={dataElement.username}
			type="text"
			class="input"
			name="username"
			placeholder="username"
		/>
	</div>
</div>
<button class="button" on:click={submit}>CREATE</button>
