<script>
	// @ts-nocheck
	import { Card } from '$components/ui/card';
	import CardContent from '$components/ui/card/CardContent.svelte';
	import CardDescription from '$components/ui/card/CardDescription.svelte';
	import CardHeader from '$components/ui/card/CardHeader.svelte';
	import CardTitle from '$components/ui/card/CardTitle.svelte';
	export let student;
</script>

<Card>
	<CardHeader>
		<CardTitle>{student.first_name} {student.last_name}</CardTitle>
		<CardDescription>Reg number : {student.reg_no}</CardDescription>
	</CardHeader>
</Card>
