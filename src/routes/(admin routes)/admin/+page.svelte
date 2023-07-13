<script>
	import { onMount } from 'svelte';
	import { fetchStudents, students } from '$lib/stores/students';
	import StudentCard from '../components/StudentCard.svelte';

	onMount(async () => {
		await fetchStudents();
	});
</script>

<h1>All Students</h1>

<div>
	{#each $students as student}
		<StudentCard {student} />
	{/each}
</div>
clear
