<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { fetchStudentByEmail } from '$lib/stores/student';
	import Auth from './components/Auth.svelte';
	import StudentDetails from './components/StudentDetails.svelte';

	export let data;
	let { supabase, session } = data;

	async function sendMagicLink(email) {
		console.log('Sending magic link');
		let res;
		try {
			res = await supabase.auth.signInWithOtp({
				email,
				options: {
					emailRedirectTo: '/'
				}
			});
			console.log(`Sent >> ${JSON.stringify(data)}`);
		} catch (err) {
			console.error(err);
		}

		return res;
	}

	async function logout() {
		console.log('Logging out');
		const res = await supabase.auth.signOut();

		location.reload();
	}
</script>

{#if session?.user}
	{#await fetchStudentByEmail(session.user.email)}
		Loading student details ...
	{:then student}
		<StudentDetails {student} {logout} />
	{/await}
{:else}
	<Auth {sendMagicLink} />
{/if}
