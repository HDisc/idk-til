<script>
	import PostCard from '../components/PostCard.svelte';
	import ThemeToggleButton from './ThemeToggleButton.svelte';
	export let data;
</script>

<h1 class="my-5">Wisdom Well</h1>

{#each data.contents as post}
	<PostCard
		link={post.id}
		postType={post.postType[0]}
		content={post.content}
		date={post.createdAt}
	/>
{/each}
<ThemeToggleButton />
