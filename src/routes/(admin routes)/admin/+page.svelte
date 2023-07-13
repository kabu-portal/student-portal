<script>
	import { onMount } from 'svelte';
	import { fetchStudents, students } from '$lib/stores/students';

	onMount(async () => {
		await fetchStudents();
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<pre>
    {JSON.stringify($students, null, 2)}
</pre>
