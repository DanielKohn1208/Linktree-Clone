<script>
	export let addData;

	const dataDefault = {
		type: 'youtube-video',
		videoUrl: ''
	};

	let dataElement = dataDefault;
	function submit() {
		addData(dataElement);
	}
</script>

<div class="field">
	<label for="" class="label">Video URL</label>
	<div class="control">
		<input
			bind:value={dataElement.videoUrl}
			type="text"
			class="input"
			name="Video URL"
			placeholder="Video URL"
		/>
	</div>
</div>
<button class="button" on:click={submit}>CREATE</button>
