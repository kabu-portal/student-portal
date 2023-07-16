<script>
	// @ts-nocheck
	import Button from '$components/ui/button/Button.svelte';
	import Input from '$components/ui/input/Input.svelte';
	import Label from '$components/ui/label/Label.svelte';
	import { emails, fetchAllEmails } from '$lib/stores/students';
	import { Loader2 } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let sendMagicLink;

	let email = '';
	let loading = false;
	let emailSent = false;

	onMount(async () => {
		await fetchAllEmails();
	});

	async function handleSignIn() {
		if (!emailSent) {
			loading = true;

			// send magic link for this email
			await sendMagicLink(email);

			loading = false;
			emailSent = true;
		}
	}
</script>

<div class="flex justify-center items-center h-screen bg-slate-300">
	<form
		on:submit|preventDefault={handleSignIn}
		class="flex flex-col justify-center gap-8 max-w-lg w-[300px] bg-white p-8 shadow-md rounded-md"
	>
		{#if emailSent}
			<!-- If OTP has been sent -->
			Check your email for the OTP
		{:else}
			<!-- Fresh sign in with OTP -->
			<h1 class="font-bold text-xl text-slate-400">Student portal</h1>

			<div class="flex flex-col gap-2">
				<Label class="font-bold">Email</Label>
				<Input type="email" bind:value={email} placeholder="example@kabarak.ac.ke" />
			</div>

			<Button disabled={!$emails.includes(email)} type="submit">
				{#if loading}
					<Loader2 class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				Send me a magic link
			</Button>
		{/if}
	</form>
</div>
