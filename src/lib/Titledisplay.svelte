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
<h3 class="is-size-1 has-text-centered has-text-weight-bold is-underlined">
	{item.title}
</h3>
