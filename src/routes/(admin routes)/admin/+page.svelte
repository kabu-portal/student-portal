<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { fetchStudents, students } from '$lib/stores/students';
	import Table from '$components/ui/table/Table.svelte';
	import {
		TableCaption,
		TableHeader,
		TableRow,
		TableHead,
		TableBody,
		TableCell
	} from '$components/ui/table';

	import StudentDialog from './StudentDialog.svelte';

	onMount(async () => {
		await fetchStudents();
	});

	// to edit existing students you need to save stuff in a form
	let studentForm = null;
</script>

<div class="p-2">
	<Table>
		<TableCaption>List of all students</TableCaption>
		<TableHeader>
			<TableRow>
				<TableHead class="w-[100px]">Reg</TableHead>
				<TableHead>Name</TableHead>
				<TableHead>Email</TableHead>
				<TableHead>Course</TableHead>
				<TableHead>Action</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{#each $students as student}
				<TableRow>
					<TableCell class="font-medium">{student.reg_no}</TableCell>
					<TableCell>{student.first_name} {student.last_name}</TableCell>
					<TableCell>{student.email}</TableCell>
					<TableCell>{student.course_name}</TableCell>
					<TableCell class="align-right">
						<!-- Edit existing users-->
						<StudentDialog {student} />
					</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</div>
