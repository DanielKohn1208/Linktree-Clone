<script>
	export let item;
	export let deleteItem = undefined;
	export let isEditing;
</script>
<div class="is-flex is-justify-content-flex-end" style="height:20px">
	{#if isEditing}
	<button on:click={() => deleteItem(item.id)} class="delete " />
	{/if}
</div>
<div class="box ig-bg ">
	<a class="is-flex is-justify-content-center" href="https://www.instagram.com/{item.username}">
		<svg class="pl-3 pr-5" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
			<style>
				svg {
					fill: #ffffff;
				}
			</style><path
				d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
			/></svg
		>
		<p class="ig-fg is-bold is-size-3">@{item.username}</p>
	</a>
</div>

<style>
	.ig-fg {
		color: #fff;
	}

	.ig-bg {
		background: -webkit-radial-gradient(
				32% 106%,
				circle cover,
				rgb(255, 225, 125) 0%,
				rgb(255, 205, 105) 10%,
				rgb(250, 145, 55) 28%,
				rgb(235, 65, 65) 42%,
				transparent 82%
			),
			-webkit-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
		background: -moz-radial-gradient(
				32% 106%,
				circle cover,
				rgb(255, 225, 125) 0%,
				rgb(255, 205, 105) 10%,
				rgb(250, 145, 55) 28%,
				rgb(235, 65, 65) 42%,
				transparent 82%
			),
			-moz-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
		background: -ms-radial-gradient(
				32% 106%,
				circle cover,
				rgb(255, 225, 125) 0%,
				rgb(255, 205, 105) 10%,
				rgb(250, 145, 55) 28%,
				rgb(235, 65, 65) 42%,
				transparent 82%
			),
			-ms-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
		background: -o-radial-gradient(
				32% 106%,
				circle cover,
				rgb(255, 225, 125) 0%,
				rgb(255, 205, 105) 10%,
				rgb(250, 145, 55) 28%,
				rgb(235, 65, 65) 42%,
				transparent 82%
			),
			-o-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
		background: radial-gradient(
				circle farthest-corner at 32% 106%,
				rgb(255, 225, 125) 0%,
				rgb(255, 205, 105) 10%,
				rgb(250, 145, 55) 28%,
				rgb(235, 65, 65) 42%,
				transparent 82%
			),
			linear-gradient(135deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
	}
</style>
