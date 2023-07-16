<script>
	// @ts-nocheck

	import * as Icons from 'svelte-feather-icons';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$components/ui/dialog';
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';
	import { Button } from '$components/ui/button';
	import Textarea from '$components/ui/textarea/Textarea.svelte';

	import { Loader2 } from 'lucide-svelte';

	import { createStudent, updateStudent } from '$lib/stores/student';
	import { fetchStudents } from '$lib/stores/students';

	export let student;
	export let isNew = false;

	let loading = false;
	let isOpen = false;

	async function handleSave() {
		loading = true;
		isOpen = true;

		// if you're creating a new student
		if (isNew) {
			await createStudent(student);
		} else {
			await updateStudent(student);
		}

		// update the students table
		fetchStudents();
		console.log(data);
		loading = false;
	}
</script>

<Dialog open={isOpen}>
	<DialogTrigger>
		<slot name="trigger" />
	</DialogTrigger>
	<DialogContent class="sm:max-w-[425px] px-0">
		<DialogHeader class="px-4">
			<DialogTitle>Edit student details {JSON.stringify(isOpen)}</DialogTitle>
			<DialogDescription>
				Make changes to your profile here. Click save when you're done.
			</DialogDescription>
		</DialogHeader>
		<hr />
		<div class="max-h-[50vh] overflow-auto px-4">
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4">
					<Label class="text-right">Registration</Label>
					<Input class="col-span-3" bind:value={student.reg_no} disabled={!isNew} />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label class="text-right">Email</Label>
					<Input class="col-span-3" bind:value={student.email} disabled={!isNew} />
				</div>
				<hr class="grid-cols-4" />
				<div class="grid grid-cols-4 items-center gap-4">
					<Label class="text-right">First name</Label>
					<Input class="col-span-3" bind:value={student.first_name} />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label class="text-right">Last name</Label>
					<Input class="col-span-3" bind:value={student.last_name} />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label class="text-right">National ID</Label>
					<Input class="col-span-3" bind:value={student.national_id} />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label class="text-right">Date of birth</Label>
					<Input class="col-span-3" type="date" bind:value={student.dob} />
				</div>
				<hr class="grid-cols-4" />
				<div class="grid grid-cols-4 items-center gap-4">
					<Label class="text-right">Course name</Label>
					<Input class="col-span-3" bind:value={student.course_name} />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label class="text-right">Balance</Label>
					<Input class="col-span-3" type="number" bind:value={student.balance} />
				</div>
				<hr class="grid-cols-4" />
			</div>
			<div class="grid gap-4">
				<Label>Student report</Label>
				<Textarea class="" type="number" bind:value={student.report} />
			</div>
		</div>
		<hr />
		<DialogFooter class="px-4">
			<Button on:click={handleSave} type="submit">
				{#if loading}
					<Loader2 class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				Save changes
			</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
