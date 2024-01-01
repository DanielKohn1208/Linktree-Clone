<script>
	export let item;
	export let deleteItem = undefined;
	export let isEditing;
	let imgLink = '';
	let title = '';
	async function getVideo() {
		let response = await fetch(`https://noembed.com/embed?url=${item.videoUrl}`);
		let json = await response.json();
		console.log(json.title);
		title = json.title;
		imgLink = json.thumbnail_url;
	}
	getVideo();
</script>

<div class="is-flex is-justify-content-flex-end" style="height:20px">
	{#if isEditing}
		<button on:click={() => deleteItem(item.id)} class="delete" />
	{/if}
</div>

<div class="box ig-bg video-container">
	<a class="is-flex is-justify-content-center" href={item.videoUrl}>
		<img class="mr-5 video-image" src={imgLink} alt="" />
		<p class="ig-fg is-bold is-size-3">{title}</p>
	</a>
</div>

<style>
	.video-image {
		height: 50px;
	}

	.video-container {
		background-color: #ff0000;
	}

	p {
		color: white;
	}
</style>
