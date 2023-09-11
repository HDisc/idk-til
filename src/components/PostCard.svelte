<script>
	import { dateFormat } from '../lib/dateFormat';
	export let link;
	export let postType;
	export let date;
	export let content;
	const borderStyle = () => {
		if (postType === 'idk') {
			return 'border-red-500 dark:border-red-700';
		} else if (postType === 'til') {
			return 'border-blue-500 dark:border-blue-700';
		}
		return nil;
	};
</script>

<a href={link}>
	<div class="flex flex-row my-2 items-center border-solid border-4 p-2 rounded-md {borderStyle()}">
		<div class="w-28">{dateFormat(date)}</div>
		<div class="flex flex-col">
			<h2 class="mr-4">{content}</h2>
		</div>
	</div>
</a>
