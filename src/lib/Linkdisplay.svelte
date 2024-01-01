<script>
	export let item;
	export let isEditing;
	export let deleteItem = undefined;
</script>

<div class="is-flex is-justify-content-flex-end" style="height:20px">
	{#if isEditing}
		<button on:click={() => deleteItem(item.id)} class="delete" />
	{/if}
</div>
<div class="box">
	<img
		src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url={item.link}&size=16"
		alt=""
	/>
	<a href={item.link}>{item.title}</a>
</div>
