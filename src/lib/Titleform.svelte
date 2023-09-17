<script>
	export let addData;
	const dataDefault = {
		type: "title",
		title: ""
	}
	
	let dataElement = dataDefault
	function submit() {
		dataElement = dataDefault
		addData(dataElement)
	}
</script>

<div class="field">
	<label for="" class="label">Title</label>
	<div class="control">
		<input
			bind:value={dataElement.title}
			type="text"
			class="input"
			name="title"
			placeholder="Title"
		/>
	</div>
</div>
<button class="button" on:click={submit}>CREATE</button>
