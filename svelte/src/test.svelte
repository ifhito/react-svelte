<svelte:options tag={null} />
<script>
	export let name = 'test';
	console.log("test");
</script>
<input bind:value={name}>
<h1>{name}</h1>

