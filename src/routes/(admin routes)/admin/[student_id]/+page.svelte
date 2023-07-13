<script>
	import { fetchStudentById } from '$lib/stores/student';
	import { page } from '$app/stores';

	import { Input } from '$components/ui/input';

	$: student_id = $page.params.student_id;

	const studentForm = {
		first_name: '',
		last_name: ''
	};
</script>

{#await fetchStudentById(student_id)}
	<p>Loading student data</p>
{:then student}
	<div class="p-4">
		<Input placeholder="" />
	</div>
	<pre>{JSON.stringify(student, null, 2)}</pre>
{:catch e}
	<p>Student data is invalid</p>
	<p>{e}</p>
{/await}
