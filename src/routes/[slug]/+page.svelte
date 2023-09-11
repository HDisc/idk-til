<script>
	import PostCard from '../../components/PostCard.svelte';
	export let data;
</script>

<PostCard link={data.id} postType={data.postType[0]} content={data.content} date={data.createdAt} />
