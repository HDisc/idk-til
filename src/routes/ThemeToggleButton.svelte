<script>
	import { onMount } from 'svelte';

	let darkMode = false;

	function toggleDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('dark-mode', darkMode.toString());
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	onMount(() => {
		darkMode = localStorage.getItem('dark-mode') === 'true';
		if (darkMode) {
			document.documentElement.classList.add('dark');
		}
	});
</script>

<button on:click={toggleDarkMode} class="bg-green-600 dark:bg-green-500 rounded-md">
	{#if darkMode}
		Switch to Light Mode
	{:else}
		Switch to Dark Mode
	{/if}
</button>
