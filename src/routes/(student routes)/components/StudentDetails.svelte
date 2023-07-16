<script>
	// @ts-nocheck
	import dayjs from 'dayjs';
	import Button from '$components/ui/button/Button.svelte';

	export let user;
	export let student;
	export let logout;
</script>

<div class="relative">
	<header class="bg-[#ac1d20] p-4 text-white flex gap-4 justify-between sticky top-0 z-10">
		<span class="text-2xl">
			Welcome {student.first_name}
		</span>
		<Button class="bg-white/10 font-bold" on:click={logout}>Log out</Button>
	</header>

	<main class="p-4 relative">
		<div class="grid gap-4">
			<div class="grid grid-cols-4">
				<span class="font-bold text-muted-foreground"> Full name </span>
				<span class="colpan-3"> {student.first_name} {student.last_name}</span>
			</div>

			<div class="grid grid-cols-4">
				<span class="font-bold text-muted-foreground"> Registration </span>
				<span class="colpan-3"> {student.reg_no}</span>
			</div>

			<div class="grid grid-cols-4">
				<span class="font-bold text-muted-foreground"> Email </span>
				<span class="colpan-3"> {student.email}</span>
			</div>

			<div class="grid grid-cols-4">
				<span class="font-bold text-muted-foreground"> National ID </span>
				<span class="colpan-3"> {student.national_id}</span>
			</div>

			<div class="grid grid-cols-4">
				<span class="font-bold text-muted-foreground"> DOB </span>
				<span class="colpan-3"> {dayjs(student.dob)?.format('DD MMM YYYY')} </span>
			</div>

			<hr />

			<div class="grid grid-cols-4">
				<span class="font-bold text-muted-foreground"> Course </span>
				<span class="colpan-3"> {student.course_name}</span>
			</div>

			<div class="grid grid-cols-4">
				<span class="font-bold text-muted-foreground"> Balance </span>
				<span class="colpan-3"> KES {student.balance}</span>
			</div>

			<hr />

			<div class="grid grid-cols-4">
				<span class="font-bold text-muted-foreground"> Student report </span>
				<span class="colpan-3"> {student.report} </span>
			</div>
		</div>
	</main>
</div>
