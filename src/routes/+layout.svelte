<script>
	import "bulma/css/bulma.min.css"
	import Navbar from "$lib/Navbar.svelte"
	export let data
</script>
<Navbar {data}/>
<slot />
