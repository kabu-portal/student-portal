<script>
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

	import * as Icons from 'svelte-feather-icons';

	onMount(async () => {
		await fetchStudents();
	});
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
				<TableHead class="text-right">Action</TableHead>
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
						<div class="flex justify-end cursor-pointer">
							<a href={`/admin/${student.id}`}>
								<Icons.ChevronRightIcon size="16" />
							</a>
						</div>
					</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</div>
