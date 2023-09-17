<script>
	export let addData;
	const dataDefault = {
		type: 'link',
		title: '',
		link: ''
	};

	let dataElement = dataDefault;
	function submit() {
		if (dataElement.link.trim().substring(7) != 'http://') {
			dataElement.link= 'http://' + dataElement.link;
		}
		dataElement = dataDefault;
		addData(dataElement);
	}
</script>

<div class="field">
	<label for="" class="label">Link</label>
	<div class="control">
		<input bind:value={dataElement.link} type="text" class="input" name="link" placeholder="link" />
	</div>
</div>

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
