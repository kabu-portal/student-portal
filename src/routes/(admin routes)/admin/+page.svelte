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
	import Button from '$components/ui/button/Button.svelte';
	import * as Icons from 'svelte-feather-icons';

	onMount(async () => {
		await fetchStudents();
	});

	// to edit existing students you need to save stuff in a form
	let newStudentForm = {
		first_name: '',
		last_name: '',
		dob: null,
		balance: 0,
		report: ''
	};
</script>

<div class="p-4 grid gap-8">
	<div class="flex gap-4 justify-between">
		<h1 class="text-3xl font-bold">Admin dashboard</h1>
		<StudentDialog student={newStudentForm} isNew={true}>
			<div slot="trigger">
				<Button>Create new student</Button>
			</div>
		</StudentDialog>
	</div>
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
						<StudentDialog {student}>
							<div slot="trigger">
								<Icons.Edit3Icon size="16" />
							</div>
						</StudentDialog>
					</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</div>
